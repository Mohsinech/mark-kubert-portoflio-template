"use client";

import { useState, useEffect } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const isAM = hours < 12;

      hours = hours % 12;
      if (hours === 0) hours = 12;

      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      const period = isAM ? "AM" : "PM";

      setTime(`${hours}:${formattedMinutes} ${period}`);
    };

    updateTime();

    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return <span>{time}</span>;
};

export default CurrentTime;
