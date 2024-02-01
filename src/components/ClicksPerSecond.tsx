import { useState } from "react";
import { useTimer } from "../store/timer";

const ClicksPerSecond = () => {

  const { time, initialTime, startTime } = useTimer();
  const [clicks, setClicks] = useState<number>(0)
  
  let content 
  let score:number = 0
  
  score = clicks / initialTime
  
  const handleClick = () => {
    setClicks(clicks + 1)
  }

  if (time === -1) {
    content = <div className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-96 h-56 mx-auto rounded-lg shadow-md mt-14 mb-14" style={{ userSelect: 'none' }} onClick={() => startTime()}>Start</div>
  } else if (time === 0) {

    content = <div><div className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-96 h-56 mx-auto rounded-lg shadow-md mt-14 mb-14" style={{ userSelect: 'none' }} > Clicks per second : {score}</div>
      <button className="bg-primary hover:bg-secondary text-white py-2 px-4 rounded mb-14" onClick={() => startTime()} > Try again!</button>
    </div>
    
  } else if (time <= 10){
    content = <div className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-96 h-56 mx-auto rounded-lg shadow-md mt-14 mb-14" style={{ userSelect: 'none' }} onClick={() => {handleClick()}}>{time}</div>
  }else {
    content = <div className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-96 h-56 mx-auto rounded-lg shadow-md mt-14 mb-14" style={{ userSelect: 'none' }}>Ready: {time - 10}</div>
    
  }

  return (
    <div className="text-center mt-14">
      {content}
    </div>
  );
};

export default ClicksPerSecond;
