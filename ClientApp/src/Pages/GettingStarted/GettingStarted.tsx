import React, { useState } from 'react';
import './GettingStarted.scss';
import "bootstrap";
import { GetLocationData } from './GetLocationData';
import { GetLocationSummary } from './GetLocationData';

import { LocationSummary } from './LocationSummary';
// @ts-ignore: could not find type declaration error. Types are used only byt the imported widget so not needed to the rest of the typscript.
import ReactWeather, { useOpenWeather } from 'react-open-weather';

export enum Locations {
    Scotland,
    Canada,
    Australia
}

function GettingStarted() {
    const [selectedLocation, setSelectedLocation] = useState(Locations.Scotland);

    const locationData = GetLocationData(selectedLocation);
    const locationSummary = GetLocationSummary(selectedLocation);


    const { data, isLoading, errorMessage } = useOpenWeather({
        key: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
        lat: locationData.latitude,
        lon: locationData.longitude,
        lang: 'en',
        unit: 'metric'
    });

    return (
        <div className="content-container">
            <div className="getting_started">

                <div className='top-page-break'></div>

                <h1 className="title">Getting Started: Find the Perfect Whalespotting Location</h1>
                <div className="places body-text">
                    <button data-testid={"ScotlandButton"} className={selectedLocation === Locations.Scotland ? 'btn btn-primary' : 'btn btn-outline-primary'} onClick={() => setSelectedLocation(Locations.Scotland)}>Scotland</button>
                    <button data-testid={"CanadaButton"} className={selectedLocation === Locations.Canada ? 'btn btn-primary' : 'btn btn-outline-primary'} onClick={() => setSelectedLocation(Locations.Canada)}>Canada</button>
                    <button data-testid={"AustraliaButton"} className={selectedLocation === Locations.Australia ? 'btn btn-primary' : 'btn btn-outline-primary'} onClick={() => setSelectedLocation(Locations.Australia)}>Australia</button>
                </div>

                <LocationSummary location={locationSummary} />

                <div id="widget">
                    <ReactWeather
                        isLoading={isLoading}
                        errorMessage={errorMessage}
                        data={data}
                        lang="en"
                        locationLabel={locationData.label}
                        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                        showForecast
                    />
                </div>
            </div>

            <div className='bottom-page-break'></div>
        </div>
    )
}

export { GettingStarted };


