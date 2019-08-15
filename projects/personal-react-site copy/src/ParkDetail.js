import React from 'react';
import {withParks} from './ParksProvider'

const ParkDetail = (props) => {
    // console.log(props)
    let {description, fullName, directionsUrl, states} = props.parkInfo
    return (
        <div className='park-boxes'>
            <h1>{fullName}</h1>
            <h3>{description}</h3>
            <a href={directionsUrl}>Directions</a>
            <h4>{states}</h4>
            <button onClick={() => props.addToVisited(props.parkInfo)}>I've been here!</button>
        </div>
    );
};

export default withParks(ParkDetail);