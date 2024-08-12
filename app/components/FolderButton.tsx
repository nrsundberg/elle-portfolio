import { useState } from "react";
import folder from "../../public/folder.png";
import PopupCard from "./PopupCard";

export function FolderButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(!open)}>
        <img src={folder} alt="Folder Icon Button" width="75" height="75" />
      </button>
      <PopupCard open={open} setOpen={setOpen} />
    </>
  );
}
