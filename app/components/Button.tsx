import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import type {
  ButtonHTMLAttributes,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react";
import {
  BsInstagram,
  BsLinkedin,
  BsMailbox2Flag,
  BsSubstack,
} from "react-icons/bs";

import { FaFileContract } from "react-icons/fa";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ children, ...props }: ButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <button
      {...props}
      className="relative border-2 border-slate-100 border-b-slate-700 border-r-slate-700 px-2 justify-between
      items-center inline-flex h-fit py-1"
      onClick={() => setOpen((prev) => !prev)}
    >
      <img
        src={"faviconLight.ico"}
        alt="Elle Creative Co. logo"
        style={{ height: "20px", marginRight: 4 }}
      />
      <PopupList open={open} setOpen={setOpen} />
      {children}
    </button>
  );
}

export function PopupList({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const popupRef = useRef<HTMLDivElement | null>(null);

  // Escape closes
  useEffect(() => {
    if (!open) return;
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, setOpen]);

  // Outside click closes
  useEffect(() => {
    if (!open) return;
    const handleMouseDown = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (popupRef.current && target && !popupRef.current.contains(target)) {
        setOpen(false);
      }
    };
    // Defer attachment to next tick so the click that opened the popup
    // doesn't immediately close it.
    const timer = window.setTimeout(() => {
      document.addEventListener("mousedown", handleMouseDown);
    }, 0);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div
      ref={popupRef}
      className="absolute bottom-full w-[150px] left-0 bg-slate-300 grid auto-rows-auto
       border-2 border-slate-100  border-r-slate-700"
    >
      <MenuListItem>
        <Link to="/ElleSundberg_Resume.pdf" target="_blank" download>
          <div className="flex items-center gap-2">
            <FaFileContract />
            Resume
          </div>
        </Link>
      </MenuListItem>
      <MenuListItem>
        <div className="flex items-center gap-2">
          <BsMailbox2Flag />
          <a href="mailto:elle@juranek.com">Contact</a>
        </div>
      </MenuListItem>
      <div className="gap-2 inline-flex justify-evenly h-35 p-2">
        <Link to="https://www.linkedin.com/in/ellesundberg/" target="_blank">
          <BsLinkedin style={{ height: 25, width: 25 }} />
        </Link>
        <Link to="https://ellesundberg.substack.com/" target="_blank">
          <BsSubstack style={{ height: 25, width: 25 }} />
        </Link>
        <Link to="https://www.instagram.com/elle.sundberg" target="_blank">
          <BsInstagram style={{ height: 25, width: 25 }} />
        </Link>
      </div>
    </div>
  );
}

function MenuListItem({ children }: { children: ReactNode }) {
  return <div className="border-b-slate-700 border-2">{children}</div>;
}
