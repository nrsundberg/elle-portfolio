import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import type { ReactNode } from "react";

export type WindowState = {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { w: number; h: number };
  prevPosition?: { x: number; y: number };
  prevSize?: { w: number; h: number };
  zIndex: number;
  hasOpenedBefore: boolean;
};

export type WindowDefaults = {
  title: string;
  size?: { w: number; h: number };
  position?: { x: number; y: number };
};

type WindowsMap = Record<string, WindowState>;

type WindowManagerContextValue = {
  windows: WindowsMap;
  activeWindowId: string | null;
  registerWindow: (id: string, defaults: WindowDefaults) => void;
  openWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
  toggleMaximize: (id: string) => void;
  focusWindow: (id: string) => void;
  updatePosition: (id: string, pos: { x: number; y: number }) => void;
  updateSize: (id: string, size: { w: number; h: number }) => void;
  getWindow: (id: string) => WindowState | undefined;
};

const WindowManagerContext = createContext<WindowManagerContextValue | null>(
  null,
);

const DEFAULT_SIZE = { w: 600, h: 500 };
const STARTING_Z_INDEX = 50;
const CASCADE_STEP = 30;
const CASCADE_WRAP = 8; // wrap cascade after this many to avoid running off-screen

function getViewportSize() {
  if (typeof window === "undefined") {
    return { w: 1024, h: 768 };
  }
  return { w: window.innerWidth, h: window.innerHeight };
}

function defaultPosition(cascadeIndex: number, size: { w: number; h: number }) {
  const vp = getViewportSize();
  const baseX = Math.max(0, vp.w / 2 - size.w / 2);
  const baseY = Math.max(0, vp.h / 2 - size.h / 2);
  const offset = (cascadeIndex % CASCADE_WRAP) * CASCADE_STEP;
  return { x: baseX + offset, y: baseY + offset };
}

export function WindowManagerProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<WindowsMap>({});
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const zCounterRef = useRef(STARTING_Z_INDEX);
  const cascadeCounterRef = useRef(0);

  const registerWindow = useCallback(
    (id: string, defaults: WindowDefaults) => {
      setWindows((prev) => {
        if (prev[id]) {
          // Idempotent: only update title if it changed
          if (prev[id].title !== defaults.title) {
            return {
              ...prev,
              [id]: { ...prev[id], title: defaults.title },
            };
          }
          return prev;
        }
        const size = defaults.size ?? DEFAULT_SIZE;
        const position = defaults.position ?? { x: 100, y: 100 };
        return {
          ...prev,
          [id]: {
            id,
            title: defaults.title,
            isOpen: false,
            isMinimized: false,
            isMaximized: false,
            position,
            size,
            zIndex: STARTING_Z_INDEX,
            hasOpenedBefore: false,
          },
        };
      });
    },
    [],
  );

  const focusWindow = useCallback((id: string) => {
    setWindows((prev) => {
      if (!prev[id]) return prev;
      zCounterRef.current += 1;
      return {
        ...prev,
        [id]: { ...prev[id], zIndex: zCounterRef.current },
      };
    });
    setActiveWindowId(id);
  }, []);

  const openWindow = useCallback((id: string) => {
    setWindows((prev) => {
      const existing = prev[id];
      if (!existing) return prev;
      zCounterRef.current += 1;
      let position = existing.position;
      let hasOpenedBefore = existing.hasOpenedBefore;
      if (!hasOpenedBefore) {
        position = defaultPosition(cascadeCounterRef.current, existing.size);
        cascadeCounterRef.current += 1;
        hasOpenedBefore = true;
      }
      return {
        ...prev,
        [id]: {
          ...existing,
          isOpen: true,
          isMinimized: false,
          position,
          zIndex: zCounterRef.current,
          hasOpenedBefore,
        },
      };
    });
    setActiveWindowId(id);
  }, []);

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => {
      if (!prev[id]) return prev;
      return {
        ...prev,
        [id]: { ...prev[id], isOpen: false, isMinimized: false },
      };
    });
    setActiveWindowId((current) => (current === id ? null : current));
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) => {
      if (!prev[id]) return prev;
      return {
        ...prev,
        [id]: { ...prev[id], isMinimized: true },
      };
    });
    setActiveWindowId((current) => (current === id ? null : current));
  }, []);

  const restoreWindow = useCallback((id: string) => {
    setWindows((prev) => {
      if (!prev[id]) return prev;
      zCounterRef.current += 1;
      return {
        ...prev,
        [id]: {
          ...prev[id],
          isMinimized: false,
          isOpen: true,
          zIndex: zCounterRef.current,
        },
      };
    });
    setActiveWindowId(id);
  }, []);

  const toggleMaximize = useCallback((id: string) => {
    setWindows((prev) => {
      const existing = prev[id];
      if (!existing) return prev;
      if (existing.isMaximized) {
        // Restore
        return {
          ...prev,
          [id]: {
            ...existing,
            isMaximized: false,
            position: existing.prevPosition ?? existing.position,
            size: existing.prevSize ?? existing.size,
            prevPosition: undefined,
            prevSize: undefined,
          },
        };
      }
      // Maximize: stash previous
      return {
        ...prev,
        [id]: {
          ...existing,
          isMaximized: true,
          prevPosition: existing.position,
          prevSize: existing.size,
        },
      };
    });
  }, []);

  const updatePosition = useCallback(
    (id: string, pos: { x: number; y: number }) => {
      setWindows((prev) => {
        if (!prev[id]) return prev;
        return {
          ...prev,
          [id]: { ...prev[id], position: pos },
        };
      });
    },
    [],
  );

  const updateSize = useCallback(
    (id: string, size: { w: number; h: number }) => {
      setWindows((prev) => {
        if (!prev[id]) return prev;
        return {
          ...prev,
          [id]: { ...prev[id], size },
        };
      });
    },
    [],
  );

  const getWindow = useCallback(
    (id: string) => windows[id],
    [windows],
  );

  const value = useMemo<WindowManagerContextValue>(
    () => ({
      windows,
      activeWindowId,
      registerWindow,
      openWindow,
      closeWindow,
      minimizeWindow,
      restoreWindow,
      toggleMaximize,
      focusWindow,
      updatePosition,
      updateSize,
      getWindow,
    }),
    [
      windows,
      activeWindowId,
      registerWindow,
      openWindow,
      closeWindow,
      minimizeWindow,
      restoreWindow,
      toggleMaximize,
      focusWindow,
      updatePosition,
      updateSize,
      getWindow,
    ],
  );

  return (
    <WindowManagerContext.Provider value={value}>
      {children}
    </WindowManagerContext.Provider>
  );
}

export function useWindowManager() {
  const ctx = useContext(WindowManagerContext);
  if (!ctx) {
    throw new Error(
      "useWindowManager must be used within a WindowManagerProvider",
    );
  }
  return ctx;
}
