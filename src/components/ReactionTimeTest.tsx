import React, { useState, useEffect } from "react";
import { useTimer } from "../store/timer";
import { useRankings } from "../store/rankings";
import Scoreboard from "./Scoreboard";

const ReactionTimeTest = () => {
  const [reactionTime, setReactionTime] = useState<number>(0);
  const [ready, setReady] = useState<boolean>(true);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [score, setScore] = useState<number>(0);

  const { time, startTime } = useTimer();
  const { addScore, rankings } = useRankings();

  const getRandomNumber = (x: number) => {
    return Math.floor(Math.random() * (x - 3) + 3);
  };

  const readyOrNot = () => {
    console.log("se ejecuta")
    setReady(true);
    setReactionTime(0); // Reiniciar el contador cada vez que comienza el intervalo
    clearInterval(intervalId!); // Limpiar intervalo anterior si existe
    const interval = setInterval(() => {
      if (ready) {
        setReactionTime((prevTime) => prevTime + 1);
      } else {
        clearInterval(interval); // Detener el intervalo si ready es false
      }
    }, 1);
    setIntervalId(interval);
  };

  const reactionStart = (x: number) => {
    setReady(false);
    setTimeout(() => {
      readyOrNot();
    }, x*1000)
  };

  const handleClick = () => {
    startTime();
    const timer = getRandomNumber(8);
    reactionStart(timer);
  };

  const stopIntervalTime = () => {
    clearInterval(intervalId!);
    console.log("Intervalo detenido");
  };

  useEffect(() => {
    if (time === 0) {
      const calculatedScore = reactionTime;
      setScore(calculatedScore);
      addScore( "reactionTimeTest", calculatedScore );
      setReactionTime(0);
      console.log(rankings.clicksPerSecond, rankings.shootTest);
    }
  }, [time, addScore]);

  let content;

  if (time === -1) {
    content = (
      <div
        className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14 animate-fade animate-once animate-duration-500"
        style={{ userSelect: "none" }}
        onClick={handleClick}
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
          Reaction Time: {score} ms
        </div>
        <button
          className="bg-primary hover:bg-secondary text-white py-2 px-4 rounded mb-14"
          onClick={handleClick}
        >
          Try again!
        </button>
      </div>
    );
  }else if (time <= 10 && ready) {
    content = (
      <div
        className="flex items-center justify-center text-[30px] text-white font-semibold bg-accent w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14"
        style={{ userSelect: "none" }}
        onClick={() => stopIntervalTime()} // Agrega el manejador de eventos onClick
      >
        Click!
      </div>
    );
  } else {
    content = (
      <div
        className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14"
        style={{ userSelect: "none" }}
      >
        Wait...
      </div>
    );
  }

  return (
    <div className="text-center mt-14">
      <h1 className="text-4xl pt-4 font-bold text-primary">Reaction Time Test</h1>
      {content}
      <Scoreboard actual="reactionTimeTest" />
    </div>
  );
};

export default ReactionTimeTest;
