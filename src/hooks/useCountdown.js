import { useEffect, useState } from "react";
import { useInterval } from "./useInterval";
import { minutesToSeconds } from "../utils/time";

export function useCountdown() {
  const [inputMinutes, setInputMinutes] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);

  useInterval(
    () => {
      setSeconds((s) => {
        if (s <= 1) {
          setRunning(false);
          setFinished(true);
          return 0;
        }
        return s - 1;
      });
    },
    1000,
    running,
  );

  useEffect(() => {
    if (running) setFinished(false);
  }, [running]);

  const start = () => {
    const next = minutesToSeconds(inputMinutes);
    if (!next) return;
    setSeconds(next);
    setRunning(true);
    setFinished(false);
  };

  const pause = () => setRunning(false);

  const reset = () => {
    setRunning(false);
    setFinished(false);
    setSeconds(0);
    setInputMinutes("");
  };

  return {
    inputMinutes,
    setInputMinutes,
    seconds,
    running,
    finished,
    start,
    pause,
    reset,
  };
}
