import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function PopupCard({
  open,
  setOpen,
  title,
  children,
  gradient,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  children: ReactNode;
  gradient: string;
}) {
  // orig gradiant
  //from-[#00007b] to-[#0884ce]
  // frenchs gradiant
  // from-[#CD1512] to-[#F2B303]
  //ms background
  // bg-[#cac6cb]
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    open && (
      <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <div
          className={
            "fixed inset-0 self-center z-50 max-h-[700px] h-fit w-4/5 max-w-[700px] justify-self-center text-[#464147] text-sm border border-white border-b-[#464147] border-r-[#464147] " +
            gradient
          }
        >
          <div className="flex flex-row items-center justify-between p-1 ">
            <h1 className="text-white">{title}</h1>
            <div className="flex items-center space-x-0.5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-4 h-4 bg-[#cac6cb] border border-white border-b-black border-r-black"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeWidth="2"
                    d="M7,7 L17,17 M7,17 L17,7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="space-y-0.5 bg-[#808080]">
            <div className="p-1 bg-[#e7e7e7] h-[700px] overflow-auto">
              {children}
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    )
  );
}
