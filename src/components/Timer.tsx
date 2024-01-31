import React from 'react';
import { useTimer } from "../store/timer";

const Timer = () => {
  const { time, startTime } = useTimer();

  return (
    <div className="text-center mt-8">
      <h1 className="text-3xl font-bold mb-4">Timer: {time}</h1>
      <button
        className="bg-tertiary text-white py-2 px-4 rounded-md hover:bg-tertiary-dark"
        onClick={() => startTime(Date.now())}
      >
        Start
      </button>
    </div>
  );
};

export default Timer;
