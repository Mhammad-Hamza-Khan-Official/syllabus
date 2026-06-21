import { useEffect, useRef, useState } from "react";

export default function Timer({ timerState, setTimerState }) {
  const { timerLimit, isStart, isPause } = timerState;

  const [totalSeconds, setTotalSeconds] = useState(0);
  const intervalRef = useRef(null);

  const timerLimitInSeconds = timerLimit * 60;

useEffect(() => {
  if (!isStart || isPause) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    return;
  }

  if (intervalRef.current) clearInterval(intervalRef.current);

  intervalRef.current = setInterval(() => {
    setTotalSeconds((prev) => prev + 1);
  }, 1000);

  return () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
}, [isStart, isPause]);

useEffect(() => {
  if (totalSeconds >= timerLimitInSeconds) {
    clearInterval(intervalRef.current);

    setTimerState((prev) => ({
      ...prev,
      isStart: false,
      isPause: false,
      totalTimeInSec: timerLimitInSeconds,
    }));
  }
}, [totalSeconds, timerLimitInSeconds, setTimerState]);

  const isRemainingTen = timerLimitInSeconds - totalSeconds <= 10;

  const hour = Math.floor(totalSeconds / 3600);
  const minute = Math.floor((totalSeconds % 3600) / 60);
  const second = totalSeconds % 60;

  return (
    <>
    <div
      className={`py-1 flex items-center gap-1.5 px-2 rounded-2xl overflow-hidden ${
        isRemainingTen
          ? "text-error-container bg-error"
          : "text-error bg-error-container"
      }`}
    >
      <span className="material-symbols-outlined">timer</span>

      <div className="font-bold space-x-1">
        <span>{String(hour).padStart(2, "0")}</span>
        <span>:</span>
        <span>{String(minute).padStart(2, "0")}</span>
        <span>:</span>
        <span>{String(second).padStart(2, "0")}</span>
      </div>
    </div>
    </>
  
  );
}