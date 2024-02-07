import { useState } from "react";

import { useTimer } from "../store/timer";

const ShootTest = () => {
  const [clicks, setClicks] = useState(0);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const { time, initialTime, startTime } = useTimer();

  const handleClick = () => {
    setClicks(clicks + 1);
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
          Clicks per second : {}
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
        <div className="w-10 h-10 bg-accent rounded-full"></div>
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
      <div
  className="flex content-start text-[30px] text-white font-semibold bg-tertiary w-[500px] h-[300px] mx-auto rounded-lg shadow-md mt-14 mb-14"
  style={{ userSelect: "none" }}
>
  <div
    // className={`w-10 h-10 bg-accent rounded-full mt-${position.x} ml-${position.y}`}
    className={`w-10 h-10 bg-accent rounded-full mt-20 ml-${position.y}`}
    onClick={() => {
      handleClick();
    }}
  ></div>
</div>
      {clicks}
    </div>
  );
};

export default ShootTest;
