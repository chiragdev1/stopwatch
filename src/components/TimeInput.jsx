import React from "react";

function TimeInput({ value, onChange, onKeyDown }) {
  return (
    <div className="space-y-2">
      <label
        htmlFor="minutes"
        className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
      >
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
        className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 outline-none transition focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white"
      />
    </div>
  );
}

export default React.memo(TimeInput);
