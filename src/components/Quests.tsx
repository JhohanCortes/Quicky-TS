import { Link } from "react-router-dom";

import { useTimer } from "../store/timer";
import { useRankings } from "../store/rankings";

const Quests = () => {
  const { resetTime } = useTimer();
  const { setActual } = useRankings();

  const handleClick = ( x: string) => {
    resetTime();
    setActual(x);
  };

  return (
    <div className="text-center mt-[50px] mb-[75px]">
      <Link
        to="/clickspersecond"
        className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-2 py-1.5 text-center me-2 mb-2"
        onClick={() => handleClick("clicksPerSecond")}
      >
        Clicks per second
      </Link>
      <Link
        to="/shoottest"
        className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-2 py-1.5 text-center me-2 mb-2"
        onClick={() => handleClick("shootTest")}
      >
        Shoot test
      </Link>
    </div>
  );
};

export default Quests;
