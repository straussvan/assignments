import React from 'react';
// import ParkDetail from "./ParkDetail"
import  { withParks } from "./ParksProvider"
import VisitedDetail from './VisitedDetail';

const Visited = (props) => {
    const mappedParks = props.visitedParks.map((park, i) => <VisitedDetail key={i + park.name} parkInfo={park}  />)

    return (
        <div className="visit">
            <div className="park-container">
                {mappedParks}
            </div>
        </div>
    )
}

export default withParks(Visited) 