import React from "react";
import { formatTime } from "../utils/time";

function TimeDisplay({ label, value, accent = false }) {
  return (
    <div className="text-center">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
        {label}
      </p>
      <div
        className={`rounded-3xl border px-4 py-6 font-mono text-5xl font-bold tracking-[0.12em] sm:text-7xl ${
          accent
            ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
            : "border-white/10 bg-white/5 text-white"
        }`}
      >
        {formatTime(value)}
      </div>
    </div>
  );
}

export default React.memo(TimeDisplay);
