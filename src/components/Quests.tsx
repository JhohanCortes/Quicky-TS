import { Link } from "react-router-dom"

import { useTimer } from "../store/timer";

const Quests = () => {

    const { resetTime }  = useTimer()

    const handleClick = () => {
        resetTime()
    }

    return (
        <div className="text-center mt-[50px] mb-[75px]">
            <Link 
                to="/clickspersecond" // Asegúrate de incluir el slash (/) al inicio si es una ruta relativa
                className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-2 py-1.5 text-center me-2 mb-2"
                onClick={resetTime}
            >
                Clicks per second
            </Link>
            <Link
                to="/shoottest" // Asegúrate de proporcionar una ruta válida para Shoot test
                className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-2 py-1.5 text-center me-2 mb-2"
                onClick={resetTime}
            >
                Shoot test
            </Link>
        </div>
    );
}

export default Quests;
