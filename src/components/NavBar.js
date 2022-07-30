
import React from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
export default function NavBar() {
    const [state, setState] = React.useState(false)
    function toggleOpen(){
        setState( !state )
        console.log(state);
    }
    return(
    <nav className="navbar">
    <div className="nav-center">
        <div className="nav-header">
        {/* app logo */}
        <Link to="/">
            <img src='../img/svg/logo.svg' alt="Reach Resort" />
        </Link>
        {/* navbar toggle button */}
        <button
            type="button"
            className="nav-btn"
            onClick={toggleOpen}
        >
            <FaAlignRight className="nav-icon" />
        </button>
        </div>
        {/* navbar link */}
        <ul
        className={state ? "nav-links show-nav" : "nav-links"}
        >
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/rooms">Rooms</Link> 
        </li>
        </ul>
    </div>
    </nav>
)
}