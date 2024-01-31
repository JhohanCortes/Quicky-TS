import { useTimer } from "../store/timer";

const ClicksPerSecond = () => {

  const { time, startTime } = useTimer();

  let content 
  if (time === 10) {
    console.log(time)
    content = <div className="bg-tertiary w-96 h-56 mx-auto rounded-lg shadow-md" onClick={() => startTime(Date.now())}>Start</div>
  } else if (time === 0) {
    console.log(time)
    
    content = <div className="bg-tertiary w-96 h-56 mx-auto rounded-lg shadow-md" onClick={() => startTime(Date.now())}> Try again!</div>
  } else {
    console.log(time)
    content = <div className="bg-tertiary w-96 h-56 mx-auto rounded-lg shadow-md" > {time}</div>
  }

  return (
    <div className="text-center mt-8">
      <p className="text-lg font-bold mb-4">ClicksPerSecond Test</p>
      {content}
    </div>
  );
};

export default ClicksPerSecond;
