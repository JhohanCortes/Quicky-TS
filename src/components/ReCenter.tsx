import { useEffect, useState } from "react";
import { useTimer } from "../store/timer";
import { useRankings } from "../store/rankings";
import Scoreboard from "./Scoreboard";

const ReCenter = () => {
  const [score, setScore] = useState<number>(0);
  const [clicks, setClicks] = useState<number>(0);
  const [center, setCenter] = useState<boolean>(true);
  const [position, setPosition] = useState({ x: 230, y: 130 });
  
  const { startTime, time } = useTimer();
  const { addScore, rankings } = useRankings();

  const startTimeHandler = () => {
    startTime();
  };

  const handleClick = () => {
    setCenter(!center)
    setClicks(clicks + 1);

    const newX = Math.ceil(Math.random() * 460);
    const newY = Math.ceil(Math.random() * 260);

    const adjustedX = (newX <= 215 ? newX : (newX % 215) + 245);
    const adjustedY = (newY <= 115 ? newY : (newY % 115) + 145);
    setPosition({ x: newX, y: newY });

    console.log(newX, newY)
  };

  useEffect(() => {
    if (time === 0) {
      const calculatedScore = clicks;
      console.log(clicks);
      setScore(calculatedScore);
        addScore("reCenter", calculatedScore);
      setClicks(0);
    }
  }, [time, addScore]);
  let content;

  if (time === -1) {
    content = (
      <div
      className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14 animate-fade animate-once animate-duration-500"
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
          {" "}
          Score: {score}
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
  } 
  else if (time <= 10 && center === true) {
    content = (
      <div
        className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14 "
        style={{ userSelect: "none" }}
      >
        <div
          className="w-5 h-5 bg-accent rounded-full m-auto"
          onClick={() => {
            handleClick();
          }}
        ></div>
      </div>
    );
  }else if (time <= 10) {
    content = (
      <div
        className="flex content-start text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14"
        style={{ userSelect: "none" }}
      >
        <div
          className="w-5 h-5 bg-accent rounded-full"
          style={{
            marginTop: `${position.y}px`,
            marginLeft: `${position.x}px`,
          }}
          onClick={() => {
            handleClick();
          }}
        ></div>
      </div>
    );
  }  else {
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
      <h1 className="text-4xl pt-4 font-bold text-primary">Re-center ball</h1>
      {content}
      <Scoreboard actual="reCenter"/>
    </div>
  );
};

export default ReCenter;
