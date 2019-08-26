import React, { Component } from 'react'
import axios from "axios"
const {Provider, Consumer} = React.createContext()

class ParksProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            parks:[],
            visitedParks:[]
         }
    }

    getParks = () => {
        axios.get("https://developer.nps.gov/api/v1/parks?parkCode=&q=National%20Park&sort=&api_key=zgSDkA2ktwoMlLqLloWbSx4wdBShmXIhK2A3FSKa").then((response) => {
        this.setState({parks: response.data.data})
            // console.log(this.state.parks)
        })
    }

    addToVisited = (park) => {
        // alert('you visited the ' + park.fullName + ' park') 
        this.setState((prevState)=>{
            return {
                visitedParks: [...prevState.visitedParks, park]
            }
        })
    }


    componentDidMount(){
        this.getParks()
    }

    render() { 
        return ( 
            <Provider value={{
                ...this.state,
                getParks: this.getParks,
                addToVisited: this.addToVisited
            }} >
                {this.props.children}
            </Provider>
         );
    }
}

export default ParksProvider;

export const withParks = (Comp) =>  {
    return props => <Consumer>
                        {value => <Comp {...value}{...props} />}
                    </Consumer>
}