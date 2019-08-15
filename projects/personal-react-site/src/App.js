import React from 'react';

// Routes
import Main from "./Main.js"
import Parks from "./Parks"
import Visited from "./Visited.js"

// Components
import Navbar from "./Navbar.js"

//3rd Party 
import {Switch, Route} from "react-router-dom"


const App = () => {
    return (
     <div>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/parks" component={Parks} />
            <Route path="/visited" component={Visited} />
        </Switch>
     </div>
    )
}

export default App;

