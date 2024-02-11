import React, { useEffect, useState } from "react";
import { useTimer } from "../store/timer";
import { useRankings } from "../store/rankings";
import Scoreboard from "./Scoreboard";

const HoldBall = () => {
  const [score, setScore  ] = useState<number>(0);
  const [position, setPosition] = useState({ x: 230, y: 130 });
  const [holdScore, setHoldScore] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0)

  const { startTime, time } = useTimer();
  const { addScore, rankings } = useRankings();
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const startTimeHandler = () => {
    startTime();
  };

  const mouseOverHandler = () => {
    if (!paused) {
      const id = setInterval(() => {
        setHoldScore((score) => score + 1);
      }, 100);
      setIntervalId(id);
    }
  };

  const mouseOutHandler = () => {
    clearInterval(intervalId!);
    setIntervalId(null);
  };

  const handlePause = () => {
    setPaused(!paused);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const movePosition = () => {
    const newX = Math.ceil(Math.random() * 460);
    const newY = Math.ceil(Math.random() * 260);

    setPosition({ x: newX, y: newY });
  };

  useEffect(() => {
    if (!paused) {
      const intervalId = setInterval(movePosition, Math.random() * 2000 + 1000);
      return () => clearInterval(intervalId);
    }
  }, [paused]);

  useEffect(() => {
    if (time === 0) {
      const calculatedScore = holdScore;
      setScore(calculatedScore);
      addScore("holdBall", calculatedScore);
      setHoldScore(0);
      clearInterval(intervalId!);
      setIntervalId(null);
      console.log("ejecutao")
    }
  }, [time, addScore]);


  let content;

  if (time === -1) {
    content = (
      <div
        className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14 cursor-pointer"
        onClick={startTimeHandler}
      >
        Start
      </div>
    );
  } else if (time === 0) {
    content = (
      <div>
        <div
          className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14"
          style={{ userSelect: "none" }}
        >
          score : {total}
        </div>
        <button
          className="bg-primary hover:bg-secondary text-white py-2 px-4 rounded mb-14"
          onClick={startTimeHandler}
        >
          Try again!
        </button>
      </div>
    );
  } else if (time <= 10) {
    content = (
      <div
        className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14 "
        style={{ userSelect: "none" }}
      >
        <div
          className="w-10 h-10 bg-accent rounded-full m-auto"
          style={{
            marginTop: `${position.y}px`,
            marginLeft: `${position.x}px`,
          }}
          onMouseOver={mouseOverHandler}
          onMouseOut={mouseOutHandler}
        ></div>
      </div>
    );
  } else {
    content = (
      <div
        className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14"
        style={{ userSelect: "none" }}
      >
        Ready: {time - 10}
      </div>
    );
  }

  return (
    <div className="text-center">
      {content}
      <Scoreboard actual="holdBall" />
    </div>
  );
};

export default HoldBall;
