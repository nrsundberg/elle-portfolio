import { ButtonHTMLAttributes, ReactNode, useState } from "react";
import PopupCard from "./PopupCard";

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

export function FolderButton({
  label,
  sublabel,
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
          "flex flex-col justify-items-center absolute " + props.className
        }
      >
        <img
          id="folder"
          src={"folder.png"}
          alt="Folder Icon Button"
          width="75"
          height="75"
          className="self-center"
        />
        <label className="text-white" htmlFor="folder">
          <p>
            {label}
            <br />
            {sublabel}
          </p>
        </label>
      </button>
      <PopupCard
        open={open}
        setOpen={setOpen}
        title={label}
        gradient={gradient}
      >
        {children}
      </PopupCard>
    </div>
  );
}
