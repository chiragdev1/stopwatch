import { useMemo, useState } from "react";
import Card from "./components/Card";
import ModeTabs from "./components/ModeTabs";
import TimeDisplay from "./components/TimeDisplay";
import ActionButtons from "./components/ActionButtons";
import TimeInput from "./components/TimeInput";
import ThemeToggle from "./components/ThemeToggle";
import { useStopwatch } from "./hooks/useStopwatch";
import { useCountdown } from "./hooks/useCountdown";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const [mode, setMode] = useState("stopwatch");
  const { theme, toggleTheme } = useTheme();

  const sw = useStopwatch();
  const timer = useCountdown();

  const stopwatchValue = useMemo(() => sw.elapsed, [sw.elapsed]);
  const timerValue = useMemo(() => timer.remaining, [timer.remaining]);

  return (
    <main className="min-h-screen bg-zinc-50 px-4 py-6 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <header className="flex items-center justify-between rounded-4xl border border-zinc-200 bg-white px-5 py-4 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-600 dark:text-blue-400">
              Time Tools
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Stopwatch & Timer
            </h1>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Clean, fast, and easy to use.
            </p>
          </div>

          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </header>

        <Card>
          <ModeTabs mode={mode} setMode={setMode} />

          <div className="mt-8 space-y-8">
            {mode === "stopwatch" ? (
              <>
                <TimeDisplay label="Stopwatch" value={stopwatchValue} accent />
                <ActionButtons
                  running={sw.running}
                  onToggle={sw.running ? sw.pause : sw.start}
                  onReset={sw.reset}
                />
              </>
            ) : (
              <>
                <TimeDisplay
                  label={timer.finished ? "Finished" : "Timer"}
                  value={timerValue}
                  accent={timer.running || timer.finished}
                />

                <div className="grid gap-4">
                  <TimeInput
                    value={timer.inputMinutes}
                    onChange={(e) => timer.setInputMinutes(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") timer.start();
                    }}
                  />

                  {timer.finished && (
                    <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm font-medium text-amber-700 dark:text-amber-200">
                      Time is up.
                    </div>
                  )}

                  <ActionButtons
                    running={timer.running}
                    onToggle={timer.running ? timer.pause : timer.start}
                    onReset={timer.reset}
                    toggleLabel="Start Timer"
                  />
                </div>
              </>
            )}
          </div>
        </Card>
      </div>
    </main>
  );
}
