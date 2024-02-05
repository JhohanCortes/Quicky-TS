import { Link } from "react-router-dom"

const Quests = () => {
    return (
        <div className="text-center mt-[50px] mb-[75px]">
            <Link 
            to="clickspersecond"
            className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-2 py-1.5 text-center me-2 mb-2">
                Clicks per second
            </Link>
            <Link className="text-primary hover:text-white border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-2 py-1.5 text-center me-2 mb-2">
                Shoot test
            </Link>
        </div>
    )
}

export default Quests