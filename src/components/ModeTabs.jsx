import React from "react";

function ModeTabs({ mode, setMode }) {
  const base =
    "flex-1 rounded-2xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500/20";

  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        aria-pressed={mode === "stopwatch"}
        onClick={() => setMode("stopwatch")}
        className={`${base} ${
          mode === "stopwatch"
            ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20"
            : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
        }`}
      >
        Stopwatch
      </button>
      <button
        type="button"
        aria-pressed={mode === "timer"}
        onClick={() => setMode("timer")}
        className={`${base} ${
          mode === "timer"
            ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20"
            : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
        }`}
      >
        Timer
      </button>
    </div>
  );
}

export default React.memo(ModeTabs);
