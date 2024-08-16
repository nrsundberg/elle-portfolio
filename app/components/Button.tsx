import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="border-2 border-slate-100 border-b-slate-700 border-r-slate-700 px-2 justify-between 
      items-center inline-flex h-fit py-1"
      //   onClick={() => setOpen(!open)}
      // active={open}
    >
      <img
        src={"favicon.ico"}
        alt="Elle Creative Co. logo"
        style={{ height: "20px", marginRight: 4 }}
      />
      {children}
    </button>
  );
}
