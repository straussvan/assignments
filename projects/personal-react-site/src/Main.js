import React from 'react';
import { Link } from "react-router-dom"

const Main = () => {
    return (
        
        <div className="main">
            <Link className="explore" to = "/parks"><img  src={require("./explore.png")} alt="explore button"/></Link>

        </div>
    )
}

export default Main;