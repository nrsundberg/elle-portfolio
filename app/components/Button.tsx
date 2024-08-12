import logoIMG from "../../public/favicon.ico";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
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
        src={logoIMG}
        alt="react95 logo"
        style={{ height: "20px", marginRight: 4 }}
      />
      {children}
    </button>
  );
}
