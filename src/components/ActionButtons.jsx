function Btn({ children, variant = "neutral", ...props }) {
  const styles = {
    primary: "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
    neutral: "bg-white/10 text-white hover:bg-white/15",
    danger: "bg-rose-500 text-white hover:bg-rose-400",
  };

  return (
    <button
      {...props}
      className={`rounded-2xl px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default function ActionButtons({
  onStart,
  onPause,
  onReset,
  startLabel = "Start",
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <Btn variant="primary" onClick={onStart}>
        {startLabel}
      </Btn>
      <Btn variant="neutral" onClick={onPause}>
        Pause
      </Btn>
      <Btn variant="danger" onClick={onReset}>
        Reset
      </Btn>
    </div>
  );
}
