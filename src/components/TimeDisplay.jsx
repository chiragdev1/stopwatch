import React from "react";
import { formatTime } from "../utils/time";

function TimeDisplay({ label, value, accent = false }) {
  return (
    <div className="text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
        {label}
      </p>

      <div
        className={`rounded-4xl border px-4 py-6 font-mono text-5xl font-bold tracking-[0.12em] sm:text-7xl ${
          accent
            ? "border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-200"
            : "border-zinc-200 bg-zinc-50 text-zinc-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
        }`}
      >
        {formatTime(value)}
      </div>
    </div>
  );
}

export default React.memo(TimeDisplay);
