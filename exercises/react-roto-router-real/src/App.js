import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"
import Footer from "./Footer"
import Services from "./Services"
import About from "./About"
import {Switch, Route} from "react-router-dom"

 const App = () => {
    return(
        <div>
            <Navbar />
                <Switch>
                    <Route exact path = "/" component = {Main}/>
                    <Route path = "/about" component = {About}/>
                    <Route path = "/services" component = {Services}/>
                </Switch>
            <Footer />
        </div>
    )
}
export default App 