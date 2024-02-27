import React, { useState, useEffect } from "react";
import { useTimer } from "../store/timer";
import { useRankings } from "../store/rankings";
import Scoreboard from "./Scoreboard";

const VerticalHold = () => {
  const { time, startTime } = useTimer();
  const { addScore } = useRankings();

  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [holdScore, setHoldScore] = useState<number>(0);
  const [position, setPosition] = useState<{ x:number }>({ x: 0 });
  const [calculatedScore, setCalculatedScore] = useState<number>(0);

  useEffect(() => {
    const moveInterval = setInterval(moveRandomly, 900);
    return () => clearInterval(moveInterval);
  }, []);

  const moveRandomly = () => {
    const newPosition = { x: position.x + getRandomNumber(10, 250) };
    setPosition(newPosition);
  };

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    setCalculatedScore(holdScore);
    if (time === 0) {
      clearInterval(intervalId!);
      addScore("verticalHold", holdScore);
      setHoldScore(0);
    }
  }, [time, addScore]);

  const startTimeHandler = () => {
    startTime();
  };

  const mouseHoverHandler = (hovering: boolean) => {
    if (!hovering && intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else if (hovering && !intervalId) {
      const id = setInterval(() => {
        setHoldScore((score) => score + 1);
      }, 100);
      setIntervalId(id);
    }
  };

  let content;

  if (time === -1) {
    content = (
      <div
        className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14"
        style={{ userSelect: "none" }}
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
          Score: {calculatedScore}
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
        className="flex justify-center text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14"
        style={{ userSelect: "none" }}
      >
        <div
          className="w-full h-5 bg-accent"
          style={{
            marginTop: `${position.x}px`,
            transition: "all 1s ease",
          }}
          onMouseOver={() => mouseHoverHandler(true)}
          onMouseOut={() => mouseHoverHandler(false)}
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
    <div className="text-center mt-14">
      <h1 className="text-4xl pt-4 font-bold text-primary">Vertical Hold</h1>
      {content}
      <Scoreboard actual="verticalHold" />
    </div>
  );
};

export default VerticalHold;
