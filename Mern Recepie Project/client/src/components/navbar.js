import { Link } from "react-router-dom"
import {useCookies} from "react-cookie"
import {useNavigate} from "react-router-dom"

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"])
    const navigage = useNavigate()

    const logout = () => {
        setCookies("access_token", "")
        window.localStorage.removeItem("userID")
        navigage("/auth")
    }
    
    return(
        <>
            <div className="navbar">
                <Link to="/"> Home </Link>
                <Link to="/create-recipes"> Create Rec </Link>
                <Link to="/saved-recipes"> Home </Link>
                {!cookies.access_token ? (<Link to="/auth"> Login/Register </Link>) : (<button onClick={logout}>Logout</button>)}
            </div>
        </>
    )
}