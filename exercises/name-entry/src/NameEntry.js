import React, { Component } from 'react';

class NameEntry extends Component {
    constructor(){
    super()
    this.state = {
        newName: []
    }
}

nameAccept() event => {

}

handleName() event => {
    event.preventDefault()
}
    render() {
        return (
            <div>
                <form handleName={this.handleName}> 
                    <input>
                        type="text"
                        placeholder
                    </input>
                </form>
            </div>
        );
    }
}

export default NameEntry;