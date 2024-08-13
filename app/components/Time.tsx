import React, { useState, useEffect } from "react";

const Windows95DateTime: React.FC = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    });
  };

  return (
    <div className="flex items-center border-2 border-slate-100 border-b-slate-700 border-r-slate-700 px-2 py-1 text-sm font-mono">
      <span className="mr-2">{formatTime(dateTime)}</span>
      <span>{formatDate(dateTime)}</span>
    </div>
  );
};

export default Windows95DateTime;
