import React from "react"
import Home from "./Home"
import { Switch, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Projects from "./Projects"

const App = () => {
    return(
        <div>
            <Switch>
                    <Route exact path= "/" component= {Home} />
                    <Route path= "/projects" component= {Projects} />
            </Switch>
        </div>
    )
}

export default App;