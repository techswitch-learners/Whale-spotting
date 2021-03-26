
import React, { useState } from 'react';
import LocationData from './LocationData.json';
import './GettingStarted.scss';

import { LocationSummary } from './LocationSummary';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

import WeatherWidget from '@eggtronic/react-weather-widget';


enum Locations {
    Scotland,
    Canada,
    Australia
}


function GettingStarted() {
    const [selectedLocation, setSelectedLocation] = useState(Locations.Scotland);

    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '43887186b07bb5deaad592918ae44878',
        lat: '48.137154',
        lon: '11.576124',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
      });


    const Theme = {
        color: '#b92b27', //  color of background
        width: '500px', // widget width
        height: '100px', // widget height
        mainFontSize: '24px', // main text size
        subFontSize: '14px', // sub text size
        mainFontColor: '#fff', // main text color
        subFontColor: '#fff', // sub text color
        hrColor: '#fff', // hr line color
        lineChartPadding: 45,
        lineChartLabelPadding: -10,
        lineChartColor: '#fff',
        lineChartLabelColor: '#fff',
        lineChartLabelSize: 1,
        lineChartHeight: '120px'
    }

    return (
        <div className="getting_started">

            <div className='top-page-break'></div>

            <h2>Getting Started: Find the Perfect Whalespotting Location</h2>
            <div className="places">
                <h3 /*data-testid={"ScotlandButton"}*/ className={selectedLocation === Locations.Scotland ? 'selected-icon' : 'unselected-icon'} onClick={() => setSelectedLocation(Locations.Scotland)}>Scotland</h3>
                <h3 /*data-testid={"CanadaButton"}*/ className={selectedLocation === Locations.Canada ? 'selected-icon' : 'unselected-icon'} onClick={() => setSelectedLocation(Locations.Canada)}>Canada</h3>
                <h3 /*data-testid={"AustraliaButton"}*/ className={selectedLocation === Locations.Australia ? 'selected-icon' : 'unselected-icon'} onClick={() => setSelectedLocation(Locations.Australia)}>Australia</h3>
            </div>

            <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />

            <div>
                {selectedLocation === Locations.Scotland ? <div>
                    <LocationSummary location={LocationData.Scotland} />
                    <WeatherWidget /*className='Weather_widget'*/ apiKey={'43887186b07bb5deaad592918ae44878'} theme={Theme} geo={{ lat: '50.503632', lon: '-4.652498' }} />
                </div> : null}

            </div>
            <div>
                {selectedLocation === Locations.Canada ? <div>
                    <LocationSummary location={LocationData.Canada} />
                    <WeatherWidget /*className='Weather_widget'*/ apiKey={'43887186b07bb5deaad592918ae44878'} theme={Theme} geo={{ lat: '53.135509', lon: '-57.660435' }} />
                    </div> : null}
            </div>
            <div>
                {selectedLocation === Locations.Australia ? <div>
                    <LocationSummary location={LocationData.Australia} />
                    <WeatherWidget /*className='Weather_widget'*/ apiKey={'43887186b07bb5deaad592918ae44878'}  theme={Theme} geo={{ lat: '-25.289715', lon: '152.854324' }} />
                    </div> : null}
            </div>

            <div className='bottom-page-break'></div>
        </div>
    )
}

export { GettingStarted };


