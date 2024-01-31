import { useTimer } from "../store/timer";

const ClicksPerSecond = () => {

  const { time, startTime } = useTimer();

  let content 
  if (time === -1) {
    console.log(time)
    content = <div className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-96 h-56 mx-auto rounded-lg shadow-md" style={{ userSelect: 'none' }} onClick={() => startTime()}>Start</div>
  } else if (time === 0) {
    console.log(time)
    
    content = <div className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-96 h-56 mx-auto rounded-lg shadow-md" style={{ userSelect: 'none' }} onClick={() => startTime()}> Try again!</div>
  } else {
    console.log(time)
    content = <div className="flex items-center justify-center text-[30px] text-white font-semibold bg-tertiary w-96 h-56 mx-auto rounded-lg shadow-md" style={{ userSelect: 'none' }} > {time}</div>
  }

  return (
    <div className="text-center mt-8">
      <p className="text-lg font-bold mb-4">ClicksPerSecond Test</p>
      {content}
    </div>
  );
};

export default ClicksPerSecond;
