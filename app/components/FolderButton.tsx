import { useEffect } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import PopupCard from "./PopupCard";
import { useWindowManager } from "./WindowManager";

export type ContentType = {
  text: string;
  image: string;
};

type FolderButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  sublabel: string;
  children: ReactNode;
  gradient: string;
};

function makeId(label: string, sublabel: string) {
  return (label + "-" + sublabel)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function FolderButton({
  label,
  sublabel,
  children,
  gradient,
  className,
  ...props
}: FolderButtonProps) {
  const id = makeId(label, sublabel);
  const { registerWindow, openWindow } = useWindowManager();
  const title = `${label} ${sublabel}`.trim();

  // Register early so the taskbar/state is aware of this window even before it opens.
  useEffect(() => {
    registerWindow(id, { title });
  }, [id, title, registerWindow]);

  return (
    <>
      <button
        {...props}
        onClick={() => openWindow(id)}
        className={"flex flex-col justify-items-center " + (className ?? "")}
      >
        <img
          src={"folder.png"}
          alt={`${label} ${sublabel}`}
          width="75"
          height="75"
          className="self-center"
        />
        <span className="text-white">
          {label}
          <br />
          {sublabel}
        </span>
      </button>
      <PopupCard id={id} title={title} gradient={gradient}>
        {children}
      </PopupCard>
    </>
  );
}
