import './GettingStarted.scss';
import React, { useState } from 'react';
import LocationData from './LocationData.json';
//import { Link  } from ''eact-router-dom';
import {LocationSummary} from './LocationSummary';

enum Locations{
    Scotland,
    Canada,
    Australia
  }


function GettingStarted() {
    const [selectedLocation, setSelectedLocation] = useState(Locations.Scotland);

    return (
        <div className="getting_started">
           
            <div className='top-page-break'></div>
           
            <h2>How to Get Started: Find the Perfect Whalespotting Location</h2>
            <h3 /*data-testid={"ScotlandButton"}*/ className={selectedLocation === Locations.Scotland? 'selected-icon' : 'unselected-icon'} text="LocationData.Scotland.name" onClick={() => setSelectedLocation(Locations.Scotland)}>Scotland</h3>
            <h3 /*data-testid={"CanadaButton"}*/ className={selectedLocation === Locations.Canada? 'selected-icon' : 'unselected-icon'} text="LocationData.Canada.name" onClick={() => setSelectedLocation(Locations.Canada)}>Canada</h3>
            <h3 /*data-testid={"AustraliaButton"}*/ className={selectedLocation === Locations.Australia? 'selected-icon' : 'unselected-icon'} text="LocationData.Australia.name" onClick={() => setSelectedLocation(Locations.Australia)}>Australia</h3>
            <LocationSummary location={LocationData.selectedLocation} />

            
        
        <div className='bottom-page-break'></div>
        </div>

    )
}

export { GettingStarted };


