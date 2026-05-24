import { useState } from "react";
import { useInterval } from "./useInterval";

export function useStopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useInterval(() => setSeconds((s) => s + 1), 1000, running);

  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setSeconds(0);
  };

  return { seconds, running, start, pause, reset };
}
