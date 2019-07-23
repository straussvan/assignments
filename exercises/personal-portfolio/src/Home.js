import React from 'react';
import Fade from 'react-reveal/Fade';


const Home = () => {
     
        return (

            <div className="container">
                <div className="topHome">
                    <Fade delay={1000} bottom cascade>
                    <h1>Hello! My name is Strauss.</h1>
                    <h1>I'm a fullstack developer, and a design enthusiast.</h1>
                    <h1>Welcome to my page.</h1>
                    </Fade>
                    <br></br>
                    <Fade delay={2000} bottom cascade>
                    <h1>My creations ↓</h1>
                    </Fade>
                </div>
                <div className="lower1Home">
                <h1>The National Park App</h1>
                    <br></br>
                </div>
                <div className="lower2Home">
                    <p>I wanted to create an application where users could make a bucket list of National Parks that they wanted to visit, view all the necessary travel information, and keep a personal passport of National Parks they have visited. It utilizes an API created by the National Park Service. It currently displays all of Utahs National Parks with information such as directions, notable park information, and other fun facts.</p>
                    <br></br>
                </div>
                <div className="midHome1">
                    <h1>The Scooby Doo Adventure!</h1>
                </div>
                <div className="midHome2">
                    <p>I created an interactive terminal game that threw you right into solving a mystery with Scooby Doo and the Gang! You get to create you character, look for clues, catch ghouls and ghosts, and get spooked! It was to create something that was so interactive. </p>
                </div>
                <div className="bottomHome1">
                    <h1>Get in touch!</h1>
                </div>
                <div className="bottomHome2">
                    <a href = "https://github.com/straussvan">github</a>
                    <br/>
                    <a href = "https://www.linkedin.com/in/strauss-van-wagenen-7631a615a/">linkedin</a>
                    <br/>
                    <a href = "https://docs.google.com/document/d/1mNhq16vUIwoyGftCy7sYlFsXiBfuBZyyc9PFEVFLcn0/edit?usp=sharing">resume</a>  
                </div>
            </div>
        );
    
}

export default Home;
                