import React, { useEffect, useState } from "react";
import { useTimer } from "../store/timer";
import { useRankings } from "../store/rankings";
import Scoreboard from "./Scoreboard";

const HoldBall = () => {
  const [score, setScore] = useState<number>(0);
  const [position, setPosition] = useState({ x: 230, y: 130 });
  const [holdScore, setHoldScore] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const [calculatedScore, setCalculatedScore] = useState<number>(0);

  const { startTime, time } = useTimer();
  const { addScore } = useRankings();
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const startTimeHandler = () => {
    startTime();
  };

  const mouseHoverHandler = (hovering: boolean) => {
    if (!hovering && intervalId) {
      clearInterval(intervalId); // Limpia el intervalo si hovering es falso
      setIntervalId(null);
    } else if (hovering && !intervalId) {
      const id = setInterval(() => {
        setHoldScore((score) => score + 1);
      }, 100);
      setIntervalId(id); // Establece el intervalo si hovering es verdadero
    }
  };

  const movePosition = () => {
    const newX = Math.ceil(Math.random() * 460);
    const newY = Math.ceil(Math.random() * 260);
    setPosition({ x: newX, y: newY });
  };

  useEffect(() => {
    const intervalId = setInterval(movePosition, Math.random() * 2000 + 1000);
    return () => clearInterval(intervalId);
  }, [paused]);

  useEffect(() => {
    setCalculatedScore(holdScore);
    if (time === 0) {
      mouseHoverHandler(false);
      setScore(holdScore); // Usar holdScore en lugar de calculatedScore aquí
      addScore("holdBall", holdScore); // Usar holdScore en lugar de calculatedScore aquí
      setHoldScore(0);
      clearInterval(intervalId!);
      setIntervalId(null);
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
          score : {calculatedScore}
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
            transition: "all 1s ease-in-out", // Smooth transition
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
    <div className="text-center">
      <h1 className="text-4xl pt-4 font-bold text-primary">Hold Ball</h1>
      {content}
      <Scoreboard actual="holdBall" />
    </div>
  );
};

export default HoldBall;
