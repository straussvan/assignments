import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import App from "./App"
import {BrowserRouter} from "react-router-dom"
import ParksProvider from "./ParksProvider"


ReactDOM.render(
    <BrowserRouter>
        <ParksProvider>
            <App />
        </ParksProvider>
    </BrowserRouter> ,
    document.getElementById("butt")) 

