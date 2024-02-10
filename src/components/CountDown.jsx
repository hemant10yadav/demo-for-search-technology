import React, { useState, useEffect } from "react";

export const CountdownTimer = () => {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [minutes, seconds]);

  return (
    <span>
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </span>
  );
};

export default CountdownTimer;
