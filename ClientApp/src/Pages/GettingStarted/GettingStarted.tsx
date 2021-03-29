
import React, { useState } from 'react';
import LocationData from './LocationData.json';
import './GettingStarted.scss';
import{GetLocationData} from './GetLocationData';

import { LocationSummary } from './LocationSummary';
import ReactWeather, { useOpenWeather } from 'react-open-weather';//ignore red-line, it still works

export enum Locations {
    Scotland,
    Canada,
    Australia
}

function GettingStarted() {
    const [selectedLocation, setSelectedLocation] = useState(Locations.Scotland);

    // let x;
    // let y;
    // let loc;

    // const latScotland = '57.7207794189';
    // const LonScotland = '-5.6862931252';
    // const LatCanada = '53.135509';
    // const LonCanada = '-57.660435';
    // const LatAustralia = '-20.917574';
    // const LonAustralia = '142.702789';

    // if (selectedLocation === Locations.Canada) {
    //     x = LatCanada;
    //     y = LonCanada;
    //     loc = "NewFoundland, Canada";
    // }
    // else if (selectedLocation === Locations.Scotland) {
    //     x = latScotland;
    //     y = LonScotland;
    //     loc = "Gairloch, Scotland"
    // }
    // else if (selectedLocation === Locations.Australia) {
    //     x = LatAustralia;
    //     y = LonAustralia;
    //     loc = "Queensland, Australia"
    // }

    // const { data, isLoading, errorMessage } = useOpenWeather({
    //     key: '43887186b07bb5deaad592918ae44878',
    //     lat: x,
    //     lon: y,
    //     lang: 'en',
    //     unit: 'metric', // values are (metric, standard, imperial)
    // });
    const locationData = GetLocationData(selectedLocation);

    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '43887186b07bb5deaad592918ae44878',
        lat: locationData.latitude,
        lon: locationData.longitude,
        lang: 'en',
        unit: 'metric'
    });

    return (
        <div>
            <div className="getting_started">

                <div className='top-page-break'></div>

                <h2>Getting Started: Find the Perfect Whalespotting Location</h2>
                <div className="places">
                    <button /*data-testid={"ScotlandButton"}*/ className={selectedLocation === Locations.Scotland ? 'selected-icon' : 'unselected-icon'} onClick={() => setSelectedLocation(Locations.Scotland)}>Scotland</button>
                    <button /*data-testid={"CanadaButton"}*/ className={selectedLocation === Locations.Canada ? 'selected-icon' : 'unselected-icon'} onClick={() => setSelectedLocation(Locations.Canada)}>Canada</button>
                    <button /*data-testid={"AustraliaButton"}*/ className={selectedLocation === Locations.Australia ? 'selected-icon' : 'unselected-icon'} onClick={() => setSelectedLocation(Locations.Australia)}>Australia</button>
                </div>

                <div>
                    {selectedLocation === Locations.Scotland ? <div>
                        <LocationSummary location={LocationData.Scotland} />
                    </div> : null}

                </div>
                <div>
                    {selectedLocation === Locations.Canada ? <div>
                        <LocationSummary location={LocationData.Canada} />
                    </div> : null}
                </div>
                <div>
                    {selectedLocation === Locations.Australia ? <div>
                        <LocationSummary location={LocationData.Australia} />
                    </div> : null}
                </div>


                <div id="widget">
                    <ReactWeather
                        isLoading={isLoading}
                        errorMessage={errorMessage}
                        data={data}
                        lang="en"
                        //locationLabel={loc}
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


