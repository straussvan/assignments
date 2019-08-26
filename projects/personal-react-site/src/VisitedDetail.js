import React from 'react';
import  { withParks } from "./ParksProvider"

const VisitedDetail = (props) => {
    let {description, fullName, directionsUrl, states, images} = props.parkInfo

    return (
        <div onClick={() => props.addToVisited(props.parkInfo)} className='park-boxes'>
            <h1>{fullName}</h1>
            <h3>{description}</h3>
            <a href={directionsUrl}>Directions</a>
            <img className="detailImg" src = {images}/>
            <h4>{states}</h4>
        </div>
    )
}
 


export default withParks(VisitedDetail) 