import { Link } from "react-router-dom"


export const Navbar = () => {
    return(
        <>
            <div className="navbar">
                <Link to="/"> Home </Link>
                <Link to="/auth"> Authentication </Link>
                <Link to="/create-recipes"> Create Rec </Link>
                <Link to="/saved-recipes"> Home </Link>
            </div>
        </>
    )
}