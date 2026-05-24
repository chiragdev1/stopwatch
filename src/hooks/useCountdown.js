import { useRef, useState, useCallback } from "react";
import { useInterval } from "./useInterval";

export function useCountdown() {
  const [inputMinutes, setInputMinutes] = useState("");
  const [remaining, setRemaining] = useState(0);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);

  const endTimeRef = useRef(0);

  useInterval(
    () => {
      const diff = endTimeRef.current - Date.now();

      if (diff <= 0) {
        setRemaining(0);
        setRunning(false);
        setFinished(true);
        return;
      }

      setRemaining(diff);
    },
    50,
    running,
  );

  const start = useCallback(() => {
    const minutes = Number(inputMinutes);
    if (!Number.isFinite(minutes) || minutes <= 0) return;

    const totalMs = Math.floor(minutes * 60 * 1000);
    endTimeRef.current = Date.now() + totalMs;

    setRemaining(totalMs);
    setFinished(false);
    setRunning(true);
  }, [inputMinutes]);

  const pause = useCallback(() => {
    if (!running) return;
    setRunning(false);
  }, [running]);

  const reset = useCallback(() => {
    setRunning(false);
    setFinished(false);
    setRemaining(0);
    setInputMinutes("");
    endTimeRef.current = 0;
  }, []);

  return {
    inputMinutes,
    setInputMinutes,
    remaining,
    running,
    finished,
    start,
    pause,
    reset,
  };
}
