import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div className="navbar">
            <Link to="/" className="nav-item">MAIN</Link>
            <Link to="/about" className="nav-item">ABOUT</Link>
            <Link to="/services" className="nav-item">SERVICES</Link>
        </div>
    )
}
export default Navbar