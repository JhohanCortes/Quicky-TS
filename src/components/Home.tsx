// import { count } from "console";
// import { useCounterScore } from "../store/counterScore";

import ClicksPerSecond from "./ClicksPerSecond"
import Timer from "./Timer"


const Home = () => {

  // const { increment, count } = useCounterScore()


  return (
    <div>
      {/* <h1 className="bg-secondary">Welcome to the Quicky TS</h1>
      <h1 className="bg-secondary">Counter: {count}</h1>
      <div onClick={() => {increment(1)}}className="w-16 h-16 bg-accent rounded-full"></div> */}
      <ClicksPerSecond/>
      <Timer/>
    </div>
  );
};

export default Home;
