import { useEffect, useState } from "react";
import { useTimer } from "../store/timer";
import { useRankings } from "../store/rankings";
import Scoreboard from "./Scoreboard";

const VanillaTest = () => {
  const [score, setScore] = useState<number>(0);
  const [clicks, setClicks] = useState<number>(0);

  const { startTime, time } = useTimer();
  const { addScore, rankings } = useRankings();

  const startTimeHandler = () => {
    startTime();
  };

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  useEffect(() => {
    if (time === 0) {
        const calculatedScore = clicks;
        console.log(clicks)
      setScore(calculatedScore);
      //   addScore("nombre del test", calculatedScore);
      setClicks(0);
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
        onClick={handleClick}
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

  return <div className="text-center">{content}</div>;
};

export default VanillaTest;
