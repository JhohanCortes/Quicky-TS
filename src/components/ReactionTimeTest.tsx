import React, { useEffect, useState } from "react";
import { useTimer } from "../store/timer";
import { useRankings } from "../store/rankings";
import Scoreboard from "./Scoreboard";
import { readSync } from "fs";

const ReactionTimeTest = () => {
  const [reactionTime, setReactionTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(true)
  
  
  const { time, startTime } = useTimer();
  const { addScore } = useRankings();

  const getRandomNumber = ( x : number ) => {
    return Math.floor(Math.random() * (x - 3) + 3)
  } 
  
  let intervalId: NodeJS.Timeout
  let intervalTime: NodeJS.Timeout
  
  const readyOrNot = () => {
    setReady(true)
    clearInterval(intervalId)
    intervalTime = setInterval(() => {
      setReactionTime( + 1)
      console.log("tiempo reactionTime:", reactionTime)
    }, 1)
    console.log(ready, intervalId, "intelvalID")
  }

  const stopIntervalTime = () :void => {
    clearInterval(intervalTime)
  }

  const reactionStart = (x : number) => {
    setReady(false)
    intervalId = setInterval( readyOrNot , x * 1000 );
  }

  const handleClick = () => {
    startTime()
    const timer = getRandomNumber(8);
    console.log(ready, timer)
    reactionStart(timer)

  }

  let content;

  if (time === -1) {
    content = (
      <div
        className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14"
        style={{ userSelect: "none" }}
        onClick={handleClick}
      >
        Click to Start
      </div>
    );
  } else if (time === 0) {
    content = (
      <div>
        <div
          className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14"
          style={{ userSelect: "none" }}
        >
          Reaction Time: {reactionTime} ms
        </div>
        <button
          className="bg-primary hover:bg-secondary text-white py-2 px-4 rounded mb-14"
          onClick={handleClick}
        >
          Try again!
        </button>
      </div>
    );
  } else if ( time <= 10 && ready)  {
    content = (
      <div
        className="flex items-center justify-center text-[30px] text-white font-semibold bg-accent w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14"
        style={{ userSelect: "none" }}
        onClick={stopIntervalTime}
      >
        Estamos listos
      </div>
    );
  } else {
    content = (
      <div
        className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14"
        style={{ userSelect: "none" }}
      >
        Wait for the signal...
      </div>
    );
  }

  return (
    <div className="text-center mt-14">
      <h1 className="text-4xl pt-4 font-bold text-primary">Reaction Time Test</h1>
      <span>count: {reactionTime}</span>
      {content}
      <Scoreboard actual="reactionTimeTest" />
    </div>
  );
};

export default ReactionTimeTest;