import React from 'react';
import { useTimer } from "../store/timer";

const Timer = () => {
  const {time, startTime} = useTimer();

  

  return (
    <div>
      <h1>Timer: {time}</h1>
      <button className="bg-tertiary" onClick={() =>  startTime(Date.now())}>Start</button>
    </div>
  );
};

export default Timer;
