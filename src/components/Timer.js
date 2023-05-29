import React, { useEffect, useState } from "react";

export default function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = new Date(Date.now() + 60 * 3000);

  const getTime = () => {
    const time = new Date(deadline) - Date.now();

    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  });
  return (
    <div className="timer">
      <spna> {minutes} min</spna>
      <span>{seconds} sec</span>
    </div>
  );
}
