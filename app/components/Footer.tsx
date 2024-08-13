import { Button } from "./Button";
import Windows95DateTime from "./Time";

export default function Footer() {
  return (
    <div
      className="bottom-0 fixed w-full h-12 bg-slate-300 flex center px-2 
       border-2 border-slate-100 border-b-slate-700 border-r-slate-700
       items-center justify-between"
    >
      <Button onClick={() => console.log("hello")}>Start</Button>
      <Windows95DateTime />
    </div>
  );
}
