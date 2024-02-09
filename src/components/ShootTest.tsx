import { useEffect, useState } from "react";

import { useTimer } from "../store/timer";
import { useRankings } from "../store/rankings";
import Scoreboard from "./Scoreboard";

const ShootTest = () => {
  const [clicks, setClicks] = useState<number>(0);
  const [position, setPosition] = useState({ x: 230, y: 130 });
  const [score, setScore] = useState<number>(0)

  const { time, startTime } = useTimer();
  const { addScore, rankings } = useRankings()

  useEffect(() => {
    if(time === 0) {
      const logScore = clicks
      setScore(logScore)
      addScore( "shootTest", logScore)
      setClicks(0)
      console.log(rankings.shootTest, clicks, logScore, score)
      
    }
  }, [time])


  const handleClick = () => {
    setClicks(clicks + 1);

    const newX = Math.ceil(Math.random() * 460);
    const newY = Math.ceil(Math.random() * 260);

    setPosition({ x: newX, y: newY });
  };
  let content;

  const startTimeHandler = () => {
    startTime();
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
          shoots : {score}
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
        className="flex content-start text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14"
        style={{ userSelect: "none" }}
      >
        <div
          className="w-10 h-10 bg-accent rounded-full"
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
      {content}
      {clicks}
      <Scoreboard actual="shootTest"/>
    </div>
  );
};

export default ShootTest;
