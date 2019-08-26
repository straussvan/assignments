import React from 'react';
import { withParks } from "./ParksProvider"
import ParkDetail from "./ParkDetail"


const Parks = (props) => {
    console.log(props)
    const mappedParks = props.parks.map((park, i) => <ParkDetail key={i + park.name} parkInfo={park}  />)
    return (
        <div className="parks">
            {/* <h1>PARKS</h1> */}
            <img className="brycePic" src="https://www.tripsavvy.com/thmb/gC9J63tbSfCmp7fKhlm-txUCe80=/3862x2578/filters:no_upscale()/usa-utah-bryce-canyon-national-park-elevated-view-of-canyon-rock-formations-in-morning-light-537001153-58eaf19f3df78c5162a245f2.jpg"/>
            <div className="parkcontainer">
                {mappedParks}
            </div>
        </div>
    )

}

export default withParks(Parks)