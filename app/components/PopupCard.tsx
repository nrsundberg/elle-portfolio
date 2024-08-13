import { Dispatch, SetStateAction } from "react";
import { ContentType } from "./FolderButton";

export default function PopupCard({
  open,
  setOpen,
  title,
  contentpopup,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  contentpopup: ContentType[];
}) {
  return (
    open && (
      <div className="fixed inset-0 self-center z-50 items-center max-h-[400px] h-fit w-4/5 max-w-[700px] justify-self-center bg-[#cac6cb] text-[#464147] text-sm border border-white border-b-[#464147] border-r-[#464147]">
        <div className="flex flex-row items-center justify-between p-1 bg-gradient-to-r from-[#00007b] to-[#0884ce]">
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
          <div className="p-1 bg-[#cac6cb]">
            <div className="flex flex-col mt-2 space-y-3">
              {contentpopup.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center justify-between"
                >
                  <img
                    src={item.image}
                    alt={"chosen helper icon"}
                    className="w-10 h-10"
                  />
                  <span>{item.text}</span>
                </div>
              ))}
              <span className="text-[#a099a1]">Footer card text.</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
