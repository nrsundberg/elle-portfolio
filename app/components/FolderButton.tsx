import { ButtonHTMLAttributes, ReactNode, useState } from "react";
import folder from "../../public/folder.png";
import PopupCard from "./PopupCard";

export type ContentType = {
  text: string;
  image: string;
};

type FolderButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  children: ReactNode
  gradient: string
};

export function FolderButton({
  label,
  children,
  gradient,
  ...props
}: FolderButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        {...props}
        className={
          "grid auto-rows-auto justify-items-center absolute " + props.className
        }
      >
        <img
          id="folder"
          src={folder}
          alt="Folder Icon Button"
          width="75"
          height="75"
          className="self-center"
        />
        <label className="text-white" htmlFor="folder">
          {label}
        </label>
      </button>
      <PopupCard
        open={open}
        setOpen={setOpen}
        title={label}
        gradient={gradient}
      >{children}</PopupCard>
    </div>
  );
}
