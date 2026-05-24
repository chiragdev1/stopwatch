import { useMemo, useState } from "react";
import Card from "./components/Card";
import ModeTabs from "./components/ModeTabs";
import TimeDisplay from "./components/TimeDisplay";
import ActionButtons from "./components/ActionButtons";
import TimeInput from "./components/TimeInput";
import { useStopwatch } from "./hooks/useStopwatch";
import { useCountdown } from "./hooks/useCountdown";

export default function App() {
  const [mode, setMode] = useState("stopwatch");
  const sw = useStopwatch();
  const timer = useCountdown();

  const stopwatchValue = useMemo(() => sw.elapsed, [sw.elapsed]);
  const timerValue = useMemo(() => timer.remaining, [timer.remaining]);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_28%),linear-gradient(180deg,#020617_0%,#0f172a_100%)] px-4 py-10 text-white">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6">
        <section className="text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.35em] text-cyan-300/80">
            Time Tools
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Stopwatch & Timer
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
            Clean, fast, responsive, and easy to use.
          </p>
        </section>

        <Card>
          <ModeTabs mode={mode} setMode={setMode} />

          <div className="mt-8 space-y-8">
            {mode === "stopwatch" ? (
              <>
                <TimeDisplay label="Stopwatch" value={stopwatchValue} accent />
                <ActionButtons
                  onStart={sw.start}
                  onPause={sw.pause}
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
                    <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm font-medium text-amber-200">
                      Time is up.
                    </div>
                  )}

                  <ActionButtons
                    startLabel="Start Timer"
                    onStart={timer.start}
                    onPause={timer.pause}
                    onReset={timer.reset}
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
