import React from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

function ActionButtons({ running, onToggle, onReset, toggleLabel = "Start" }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <button
        type="button"
        onClick={onToggle}
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        aria-label={running ? "Pause" : "Start"}
      >
        {running ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        {running ? "Pause" : toggleLabel}
      </button>

      <button
        type="button"
        onClick={onReset}
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-400/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
      >
        <RotateCcw className="h-4 w-4" />
        Reset
      </button>
    </div>
  );
}

export default React.memo(ActionButtons);
