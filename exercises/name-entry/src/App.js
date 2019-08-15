import React, { Component } from "react"

class App extends Component {
    constructor(){
        super()
    
        this.state = {
            name: "",
            nameList: []
        }
    }

    handleChange= e => {
        
    }

    handleSubmit = e => {
        e.preventDefault()
    }



    render() {
        return (
            <div>
                <form handleSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        placeholder="To-Do"
                        name="todo"
                        value={this.state.name}
                        onChange={this.handleChange}  />
                   
                    <button onClick={this.handleSubmit}></button>
                </form>
            </div> 
        )
    }
}

export default App