import { useRef, useState, useCallback } from "react";
import { useInterval } from "./useInterval";

export function useStopwatch() {
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);

  const startTimeRef = useRef(0);
  const elapsedBeforePauseRef = useRef(0);

  useInterval(
    () => {
      setElapsed(Date.now() - startTimeRef.current);
    },
    50,
    running,
  );

  const start = useCallback(() => {
    if (running) return;
    startTimeRef.current = Date.now() - elapsedBeforePauseRef.current;
    setRunning(true);
  }, [running]);

  const pause = useCallback(() => {
    if (!running) return;
    elapsedBeforePauseRef.current = Date.now() - startTimeRef.current;
    setElapsed(elapsedBeforePauseRef.current);
    setRunning(false);
  }, [running]);

  const reset = useCallback(() => {
    setRunning(false);
    setElapsed(0);
    startTimeRef.current = 0;
    elapsedBeforePauseRef.current = 0;
  }, []);

  return { elapsed, running, start, pause, reset };
}
