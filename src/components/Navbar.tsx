import { FaArchive, FaHome, FaPlus, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar(){


    return <>
        <div className="bg-pink-300 w-20 h-screen flex items-center justify-center">
            <nav className="list-none space-y-10 place-content-center place-items-center">
                <div className="flex items-center justify-center">
                    <Link to="/home">
                        <FaHome size={50} color="white"/>
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    <FaPlus size={50} color="white" />
                </div>
                <div className="flex items-center justify-center">
                    <FaArchive size={50} color="white" />
                </div>
                <div className="flex items-center justify-center">
                    <FaUser size={50} color="white"/>
                </div>
            </nav>
        </div>
    </>
}