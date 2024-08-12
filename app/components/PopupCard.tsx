import { Dispatch, SetStateAction } from "react";

export default function PopupCard({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    open && (
      // <div className="flex items-center justify-center min-h-screen bg-[#008080]">
      <div className="w-full max-w-lg my-12 mx-auto">
        <div className="max-w-lg mx-auto bg-[#cac6cb] text-[#464147] text-sm border border-white border-b-[#464147] border-r-[#464147]">
          <div className="flex flex-row items-center justify-between p-1 bg-gradient-to-r from-[#00007b] to-[#0884ce]">
            <h1 className="text-white">Example Name of Tab</h1>
            <div className="flex items-center space-x-0.5">
              <button
                type="button"
                className="flex items-center justify-center px-0.5 w-4 h-4 bg-[#cac6cb] border border-white border-b-black border-r-black"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-4 h-4 bg-[#cac6cb] border border-white border-b-black border-r-black"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 21h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm0-2V7h16l.001 12H4z"></path>
                </svg>
              </button>
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
          <div className="border border-b-[#dadada]">
            <ul className="flex">
              <li className="p-1 first-letter:underline">New</li>
              <li className="p-1 first-letter:underline">Options</li>
              <li className="p-1 first-letter:underline">Help</li>
            </ul>
          </div>
          <div className="space-y-0.5 bg-[#808080]">
            <div className="p-1 bg-[#cac6cb]">
              <div className="flex flex-col mt-2 space-y-3">
                <p>Text description exemple.</p>
                <button
                  type="button"
                  className="flex items-center justify-center px-2 bg-[#cac6cb] border border-white border-b-black border-r-black"
                >
                  Button Example
                </button>
                <span className="text-[#a099a1]">Footer card text.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      // </div>
    )
  );
}
