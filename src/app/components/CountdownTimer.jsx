"use client";

import { useEffect, useMemo, useState } from "react";

function getTimeLeft(targetDate) {
  const targetMs = targetDate.getTime();
  if (Number.isNaN(targetMs)) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const diffMs = Math.max(0, targetMs - Date.now());
  const totalSeconds = Math.floor(diffMs / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

function twoDigits(value) {
  return String(value).padStart(2, "0");
}

export default function CountdownTimer({ targetDateISO, className = "" }) {
  const targetDate = useMemo(() => new Date(targetDateISO), [targetDateISO]);
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setIsMounted(true);
    setTimeLeft(getTimeLeft(targetDate));

    const intervalId = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  if (!isMounted) {
    return <p className={className}>00:00:00:00</p>;
  }

  return (
    <p className={className}>
      {twoDigits(timeLeft.days)}:{twoDigits(timeLeft.hours)}:
      {twoDigits(timeLeft.minutes)}:{twoDigits(timeLeft.seconds)}
    </p>
  );
}
