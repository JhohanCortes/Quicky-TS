import { useState } from "react";
import { useTimer } from "../store/timer";

const ClicksPerSecond = () => {

  const { time, startTime } = useTimer();
  const [clicks, setClicks] = useState<number>(0)
  
  const handleClick = () => {
    setClicks(clicks + 1)
  }

  let content 
  let score:number = 0


  if (time === -1) {
    content = <div className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-96 h-56 mx-auto rounded-lg shadow-md" style={{ userSelect: 'none' }} onClick={() => startTime()}>Start</div>
  } else if (time === 0) {

    score = clicks/time
    console.log(time)
    
    content = <div>
                <div className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-96 h-56 mx-auto rounded-lg shadow-md" style={{ userSelect: 'none' }} onClick={() => startTime()}> Try again!</div>
                <p>Clicks per second : {score}</p>
              </div>
    
  } else {
    content = <div className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-96 h-56 mx-auto rounded-lg shadow-md" style={{ userSelect: 'none' }} onClick={() => {handleClick()}}>{time}</div>
  }

  return (
    <div className="text-center mt-8">
      <p className="text-lg font-bold mb-4">{clicks}</p>
      {content}
    </div>
  );
};

export default ClicksPerSecond;
