import { Link } from "react-router-dom";

import { useTimer } from "../store/timer";
import { useRankings } from "../store/rankings";

const Quests = () => {
  const { resetTime } = useTimer();
  const { setActual } = useRankings();

  const handleClick = ( x: string) => {
    resetTime();
  };

  return (
    <div className="text-center mt-[50px] mb-[75px]">
      <Link
        to="/clickspersecond"
        className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-2 py-1.5 text-center me-2 mb-2"
      >
        Clicks per second
      </Link>
      <Link
        to="/shoottest"
        className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-2 py-1.5 text-center me-2 mb-2"
      >
        Shoot test
      </Link>
      <Link
        to="/recenter"
        className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-2 py-1.5 text-center me-2 mb-2"
      >
        Re Center
      </Link>
      <Link
        to="/holdball"
        className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-2 py-1.5 text-center me-2 mb-2"
      >
        Hold Ball
      </Link>
      <Link
        to="/vanilla"
        className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-2 py-1.5 text-center me-2 mb-2"
      >
       Vanilla
      </Link>
    </div>
  );
};

export default Quests
