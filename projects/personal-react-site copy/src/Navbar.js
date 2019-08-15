import React from 'react';
import { Link } from "react-router-dom"

const Navbar = () => {
    
    return(
      <>
      <div className="navbar">
          <Link to = "/" className="logo"></Link>
          <Link to = "/parks">PARKS</Link>
          <Link to = "/visited">VISITED</Link>
      </div>
      </>

    )
}
export default Navbar