import { Button } from "./Button";
import Windows95DateTime from "./Time";
import { useWindowManager } from "./WindowManager";

export default function Footer() {
  const {
    windows,
    activeWindowId,
    restoreWindow,
    minimizeWindow,
    focusWindow,
  } = useWindowManager();

  const taskbarEntries = Object.values(windows).filter((w) => w.isOpen);

  return (
    <div
      className="bottom-0 fixed w-full h-12 bg-slate-300 flex px-2 gap-2
       border-2 border-slate-100 border-b-slate-700 border-r-slate-700
       items-center"
    >
      <Button>Start</Button>
      <div className="flex-1 flex items-center gap-1 overflow-x-auto h-full py-1 min-w-0">
        {taskbarEntries.map((w) => {
          const isActive = activeWindowId === w.id && !w.isMinimized;
          const handleClick = () => {
            if (w.isMinimized) {
              restoreWindow(w.id);
            } else if (activeWindowId === w.id) {
              minimizeWindow(w.id);
            } else {
              focusWindow(w.id);
            }
          };
          const bevel = isActive
            ? "border-2 border-b-white border-r-white border-t-slate-700 border-l-slate-700"
            : "border-2 border-slate-100 border-b-slate-700 border-r-slate-700";
          return (
            <button
              key={w.id}
              type="button"
              onClick={handleClick}
              className={
                "px-2 py-1 text-sm bg-slate-300 truncate max-w-[180px] shrink-0 " +
                bevel
              }
              title={w.title}
            >
              {w.title}
            </button>
          );
        })}
      </div>
      <Windows95DateTime />
    </div>
  );
}
