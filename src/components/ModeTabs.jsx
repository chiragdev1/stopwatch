export default function ModeTabs({ mode, setMode }) {
  const base =
    "flex-1 rounded-2xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-400";
  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        aria-pressed={mode === "stopwatch"}
        onClick={() => setMode("stopwatch")}
        className={`${base} ${
          mode === "stopwatch"
            ? "bg-cyan-400 text-slate-950"
            : "bg-white/5 text-slate-200 hover:bg-white/10"
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
            ? "bg-cyan-400 text-slate-950"
            : "bg-white/5 text-slate-200 hover:bg-white/10"
        }`}
      >
        Timer
      </button>
    </div>
  );
}
