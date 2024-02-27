import { useState, useEffect } from "react";
import { useTimer } from "../store/timer";
import { useRankings } from "../store/rankings";
import Scoreboard from "./Scoreboard";

const HorizontalHold = () => {
  const { time, initialTime, startTime } = useTimer();
  const { addScore, rankings } = useRankings();
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [holdScore, setHoldScore] = useState<number>(0);
  const [calculatedScore, setCalculatedScore] = useState<number>(0);

  const [position, setPosition] = useState({ x: 0 });
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      moveRandomly();
    }, 900); // Cambia el intervalo según tu preferencia

    return () => clearInterval(moveInterval);
  }, []);

  const moveRandomly = () => {
    const newPosition = {
      x: position.x + getRandomNumber(10, 450), // Cambia el rango según tu preferencia
    };
    setPosition(newPosition);
    console.log(newPosition);
  };

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  let content;

  useEffect(() => {
    setCalculatedScore(holdScore);
    if (time === 0) {
      mouseHoverHandler(false);
      setScore(holdScore);
      addScore("horizontalHold", holdScore);
      setHoldScore(0);
      clearInterval(intervalId!);
      setIntervalId(null);
    }
  }, [time, addScore]);

  const startTimeHandler = () => {
    startTime();
  };

  let mantenido = false

  const mouseHoverHandler = (hovering: boolean) => {
    if (!hovering && intervalId) {
    mantenido = false
      clearInterval(intervalId); // Limpia el intervalo si hovering es falso
      setIntervalId(null);
    } else if (hovering && !intervalId) {
    mantenido = true
      const id = setInterval(() => {
        setHoldScore((score) => score + 1);
      }, 100);
      setIntervalId(id);
    }
  };

  if (time === -1) {
    content = (
      <div
        className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14"
        style={{ userSelect: "none" }}
        onClick={() => startTime()}
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
          {" "}
          Score: {calculatedScore}
        </div>
        <button
          className="bg-primary hover:bg-secondary text-white py-2 px-4 rounded mb-14"
          onClick={startTimeHandler}
        >
          {" "}
          Try again!
        </button>
      </div>
    );
  } else if (time <= 10) {
    content = (
      <div
        className="flex items-center text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14"
        style={{ userSelect: "none" }}
      >
        <div
          className="w-10 h-10 bg-accent rounded-full"
          style={{
            marginLeft: `${position.x}px`,
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
      <h1 className="text-4xl pt-4 font-bold text-primary">Horizontal hold</h1>
      {content}
      <Scoreboard actual="horizontalHold" />
    </div>
  );
};

export default HorizontalHold;
