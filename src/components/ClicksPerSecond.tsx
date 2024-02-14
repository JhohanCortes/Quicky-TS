import { useState, useEffect } from "react";
import { useTimer } from "../store/timer";
import { useRankings } from "../store/rankings";
import Scoreboard from "./Scoreboard";

const ClicksPerSecond = () => {
  const { time, initialTime, startTime } = useTimer();
  const { addScore, rankings } = useRankings();

  const [clicks, setClicks] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  let content;

  useEffect(() => {
    if (time === 0) {
      const calculatedScore = clicks / initialTime;
      setScore(calculatedScore);
      addScore( "clicksPerSecond", calculatedScore );
      setClicks(0);
      console.log(rankings.clicksPerSecond, rankings.shootTest);
    }
  }, [time, addScore]);
  

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
          Clicks per second : {score}
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
        className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14"
        style={{ userSelect: "none" }}
        onClick={() => {
          handleClick();
        }}
      >
        {time}
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

  return <div className="text-center mt-14">
    <h1>Click per second</h1>
    {content}
    <Scoreboard actual="clicksPerSecond"/>
    </div>;
};

export default ClicksPerSecond;
