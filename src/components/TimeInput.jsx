export default function TimeInput({ value, onChange, onKeyDown }) {
  return (
    <div className="space-y-2">
      <label htmlFor="minutes" className="text-sm font-medium text-slate-300">
        Timer duration
      </label>
      <input
        id="minutes"
        type="number"
        min="1"
        step="1"
        inputMode="numeric"
        placeholder="Enter minutes"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
      />
    </div>
  );
}
