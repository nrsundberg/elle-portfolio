import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useWindowManager } from "./WindowManager";

const MIN_WIDTH = 320;
const MIN_HEIGHT = 240;
const TITLE_BAR_HEIGHT = 28; // approx; used for clamp
const KEEP_VISIBLE_PX = 80;

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export default function PopupCard({
  id,
  title,
  gradient,
  children,
}: {
  id: string;
  title: string;
  gradient: string;
  children: ReactNode;
}) {
  const {
    registerWindow,
    getWindow,
    focusWindow,
    closeWindow,
    minimizeWindow,
    toggleMaximize,
    updatePosition,
    updateSize,
    activeWindowId,
  } = useWindowManager();

  const win = getWindow(id);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [viewport, setViewport] = useState(() => ({
    w: typeof window !== "undefined" ? window.innerWidth : 1024,
    h: typeof window !== "undefined" ? window.innerHeight : 768,
  }));

  // Register on mount (idempotent)
  useEffect(() => {
    registerWindow(id, { title });
  }, [id, title, registerWindow]);

  // Track viewport (for maximize sizing + clamping)
  useEffect(() => {
    const onResize = () => {
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isActive = activeWindowId === id;
  const isOpen = !!win?.isOpen;
  const isMinimized = !!win?.isMinimized;
  const isMaximized = !!win?.isMaximized;

  // Focus root on first open + when becoming active
  useEffect(() => {
    if (isOpen && !isMinimized && rootRef.current) {
      // Defer so render commits first
      const node = rootRef.current;
      requestAnimationFrame(() => {
        if (node && document.activeElement !== node) {
          node.focus();
        }
      });
    }
  }, [isOpen, isMinimized, isActive]);

  // Escape closes only the active window
  useEffect(() => {
    if (!isOpen || isMinimized || !isActive) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeWindow(id);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, isMinimized, isActive, id, closeWindow]);

  // Tab focus trap (only when this window is active)
  useEffect(() => {
    if (!isOpen || isMinimized || !isActive) return;
    const root = rootRef.current;
    if (!root) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusables = Array.from(
        root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((el) => !el.hasAttribute("disabled"));
      if (focusables.length === 0) {
        e.preventDefault();
        root.focus();
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (active === first || active === root || !root.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    root.addEventListener("keydown", onKey);
    return () => root.removeEventListener("keydown", onKey);
  }, [isOpen, isMinimized, isActive]);

  // ---- Drag ----
  const dragStateRef = useRef<{ offsetX: number; offsetY: number } | null>(
    null,
  );
  const startDrag = useCallback(
    (e: React.MouseEvent) => {
      if (!win || isMaximized) return;
      // Don't begin drag from interactive child (button) — handled via stopPropagation in buttons.
      e.preventDefault();
      dragStateRef.current = {
        offsetX: e.clientX - win.position.x,
        offsetY: e.clientY - win.position.y,
      };
      const onMove = (ev: MouseEvent) => {
        if (!dragStateRef.current) return;
        const rawX = ev.clientX - dragStateRef.current.offsetX;
        const rawY = ev.clientY - dragStateRef.current.offsetY;
        // Clamp so KEEP_VISIBLE_PX of title bar always reachable
        const minX = -(win.size.w - KEEP_VISIBLE_PX);
        const maxX = window.innerWidth - KEEP_VISIBLE_PX;
        const minY = 0;
        const maxY = window.innerHeight - TITLE_BAR_HEIGHT;
        const x = Math.max(minX, Math.min(maxX, rawX));
        const y = Math.max(minY, Math.min(maxY, rawY));
        updatePosition(id, { x, y });
      };
      const onUp = () => {
        dragStateRef.current = null;
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onUp);
      };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
    },
    [win, isMaximized, id, updatePosition],
  );

  // ---- Resize ----
  const resizeStateRef = useRef<{
    startX: number;
    startY: number;
    startW: number;
    startH: number;
  } | null>(null);
  const startResize = useCallback(
    (e: React.MouseEvent) => {
      if (!win || isMaximized) return;
      e.preventDefault();
      e.stopPropagation();
      resizeStateRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        startW: win.size.w,
        startH: win.size.h,
      };
      const onMove = (ev: MouseEvent) => {
        if (!resizeStateRef.current) return;
        const dx = ev.clientX - resizeStateRef.current.startX;
        const dy = ev.clientY - resizeStateRef.current.startY;
        const w = Math.max(
          MIN_WIDTH,
          Math.min(window.innerWidth, resizeStateRef.current.startW + dx),
        );
        const h = Math.max(
          MIN_HEIGHT,
          Math.min(window.innerHeight, resizeStateRef.current.startH + dy),
        );
        updateSize(id, { w, h });
      };
      const onUp = () => {
        resizeStateRef.current = null;
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onUp);
      };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
    },
    [win, isMaximized, id, updateSize],
  );

  if (!win || !isOpen || isMinimized) return null;

  const style: CSSProperties = isMaximized
    ? {
        position: "fixed",
        left: 0,
        top: 0,
        width: viewport.w,
        height: viewport.h,
        zIndex: win.zIndex,
      }
    : {
        position: "fixed",
        left: win.position.x,
        top: win.position.y,
        width: win.size.w,
        height: win.size.h,
        zIndex: win.zIndex,
      };

  const dimmedTitleBar = !isActive;

  return (
    <div
      ref={rootRef}
      tabIndex={-1}
      role="dialog"
      aria-label={title}
      aria-modal={false}
      onMouseDown={() => focusWindow(id)}
      style={style}
      className="flex flex-col text-[#464147] text-sm border border-white border-b-[#464147] border-r-[#464147] bg-[#cac6cb] outline-none"
    >
      {/* Title bar */}
      <div
        onMouseDown={startDrag}
        onDoubleClick={() => toggleMaximize(id)}
        className={
          "shrink-0 flex items-center justify-between p-1 select-none " +
          gradient +
          (dimmedTitleBar ? " opacity-60" : "")
        }
        style={{ cursor: isMaximized ? "default" : "move" }}
      >
        <h2 className="text-white text-sm font-bold px-1 truncate">{title}</h2>
        <div
          className="flex items-center space-x-0.5"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            aria-label="Minimize"
            onClick={() => minimizeWindow(id)}
            className="w-4 h-4 bg-[#cac6cb] border border-white border-b-black border-r-black flex items-center justify-center"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="2"
                y1="9"
                x2="9"
                y2="9"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label={isMaximized ? "Restore" : "Maximize"}
            onClick={() => toggleMaximize(id)}
            className="w-4 h-4 bg-[#cac6cb] border border-white border-b-black border-r-black flex items-center justify-center"
          >
            {isMaximized ? (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* back square */}
                <rect
                  x="4"
                  y="2"
                  width="6"
                  height="6"
                  fill="none"
                  stroke="black"
                  strokeWidth="1.25"
                />
                {/* front square */}
                <rect
                  x="2"
                  y="4"
                  width="6"
                  height="6"
                  fill="#cac6cb"
                  stroke="black"
                  strokeWidth="1.25"
                />
              </svg>
            ) : (
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="8"
                  height="8"
                  fill="none"
                  stroke="black"
                  strokeWidth="1.25"
                />
                {/* thicker top to mimic title bar accent */}
                <line
                  x1="2"
                  y1="3.5"
                  x2="10"
                  y2="3.5"
                  stroke="black"
                  strokeWidth="1.25"
                />
              </svg>
            )}
          </button>
          <button
            type="button"
            aria-label="Close"
            onClick={() => closeWindow(id)}
            className="w-4 h-4 bg-[#cac6cb] border border-white border-b-black border-r-black flex items-center justify-center"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="3"
                y1="3"
                x2="9"
                y2="9"
                stroke="black"
                strokeWidth="1.5"
              />
              <line
                x1="9"
                y1="3"
                x2="3"
                y2="9"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 bg-[#e7e7e7] overflow-auto p-1">{children}</div>

      {/* Resize grip (hidden when maximized) */}
      {!isMaximized && (
        <div
          onMouseDown={startResize}
          aria-hidden="true"
          className="absolute right-0 bottom-0 w-[14px] h-[14px]"
          style={{ cursor: "nwse-resize" }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Win95-style grip dots */}
            <rect x="10" y="4" width="2" height="2" fill="#ffffff" />
            <rect x="10" y="4" width="1" height="1" fill="#464147" />
            <rect x="6" y="8" width="2" height="2" fill="#ffffff" />
            <rect x="6" y="8" width="1" height="1" fill="#464147" />
            <rect x="10" y="8" width="2" height="2" fill="#ffffff" />
            <rect x="10" y="8" width="1" height="1" fill="#464147" />
            <rect x="2" y="11" width="2" height="2" fill="#ffffff" />
            <rect x="2" y="11" width="1" height="1" fill="#464147" />
            <rect x="6" y="11" width="2" height="2" fill="#ffffff" />
            <rect x="6" y="11" width="1" height="1" fill="#464147" />
            <rect x="10" y="11" width="2" height="2" fill="#ffffff" />
            <rect x="10" y="11" width="1" height="1" fill="#464147" />
          </svg>
        </div>
      )}
    </div>
  );
}
