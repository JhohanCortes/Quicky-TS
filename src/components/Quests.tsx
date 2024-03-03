import { Link } from "react-router-dom";

const Quests = () => {
  return (
    <div className="text-center mt-10 md:mt-20 lg:mt-40 mb-10 md:mb-20 lg:mb-40">
      <div className="flex flex-wrap justify-center">
        <Link to="/clickspersecond" className="buttons"> {/* Utiliza la clase personalizada aquí */}
          Clicks per second
        </Link>
        <Link to="/shoottest" className="buttons"> {/* Utiliza la misma clase personalizada aquí */}
          Shoot test
        </Link>
        <Link to="/recenter" className="buttons"> {/* Utiliza la misma clase personalizada aquí */}
          Re Center
        </Link>
        <Link to="/holdball" className="buttons"> {/* Utiliza la misma clase personalizada aquí */}
          Hold Ball
        </Link>
        <Link to="/horizontaltest" className="buttons"> {/* Utiliza la misma clase personalizada aquí */}
          Horizontal Holding
        </Link>
        <Link to="/verticaltest" className="buttons"> {/* Utiliza la misma clase personalizada aquí */}
          Vertical Holding
        </Link>
        <Link to="/reactiontest" className="buttons"> {/* Utiliza la misma clase personalizada aquí */}
          Reaction test
        </Link>
      </div>
    </div>
  );
};

export default Quests;
