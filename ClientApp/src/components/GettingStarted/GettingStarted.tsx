
import React, { useState } from 'react';
import LocationData from './LocationData.json';
import './GettingStarted.scss';

import { LocationSummary } from './LocationSummary';


import WeatherWidget from '@eggtronic/react-weather-widget';


enum Locations {
    Scotland,
    Canada,
    Australia
}


function GettingStarted() {
    const [selectedLocation, setSelectedLocation] = useState(Locations.Scotland);

    return (
        <div className="getting_started">

            <div className='top-page-break'></div>

            <h2>Getting Started: Find the Perfect Whalespotting Location</h2>
            <div className="places">
                <h3 /*data-testid={"ScotlandButton"}*/ className={selectedLocation === Locations.Scotland ? 'selected-icon' : 'unselected-icon'} onClick={() => setSelectedLocation(Locations.Scotland)}>Scotland</h3>
                <h3 /*data-testid={"CanadaButton"}*/ className={selectedLocation === Locations.Canada ? 'selected-icon' : 'unselected-icon'} onClick={() => setSelectedLocation(Locations.Canada)}>Canada</h3>
                <h3 /*data-testid={"AustraliaButton"}*/ className={selectedLocation === Locations.Australia ? 'selected-icon' : 'unselected-icon'} onClick={() => setSelectedLocation(Locations.Australia)}>Australia</h3>
            </div>

            <div>
          
                {selectedLocation === Locations.Scotland ? <div>
                <WeatherWidget className='Weather_widget' apiKey={'43887186b07bb5deaad592918ae44878'} geo={{lat: '50.503632', lon: '-4.652498'}} />
                <LocationSummary location={LocationData.Scotland} /></div> : null}
            </div>
            <div>
                {selectedLocation === Locations.Canada ? <div>
            <WeatherWidget className='Weather_widget' apiKey={'43887186b07bb5deaad592918ae44878'} geo={{lat: '53.135509', lon: '-57.660435'}}/> 
             <LocationSummary location={LocationData.Canada} /></div> : null}
            </div>
            <div>
                {selectedLocation === Locations.Australia ?<div>
                     <WeatherWidget className='Weather_widget' apiKey={'43887186b07bb5deaad592918ae44878'} geo={{lat: '-25.289715', lon: '152.854324'}}/> 
                     <LocationSummary location={LocationData.Australia} /></div> : null}
            </div>

            <div className='bottom-page-break'></div>
        </div>

    )
}

export { GettingStarted };


