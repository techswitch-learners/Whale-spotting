import React from 'react';
import './GettingStarted.scss';
import { LocationSummaryData } from './GetLocationData';

interface LocationSummary {
    location: LocationSummaryData
}

function LocationSummary(props: LocationSummary): JSX.Element {

    return (
        <div>
            <h2 className="sub-heading"> {props.location.name}</h2>
            <div className='location-line-break body-text'></div>
            <div className='image-and-text'>
                <div className='image-container'>
                    <img className='location-image' src={props.location.imagesrc} alt='Image of Location'></img>
                </div>
                <div className='LocationTable'>
                    <p className="sub-heading">Why Should I Visit?</p>
                    <p className="body-text" data-testid="description">{props.location.description}</p>
                    <p className="sub-heading">Which Whale Species are Common here?</p>
                    <p className="body-text"> {props.location.whalespecies} </p>
                    <p className="sub-heading">When is the Best Time of Year to go?</p>
                    <p className="body-text"> {props.location.besttimeofyear} </p>
                    <p className="sub-heading">How Can I Book a Tour?</p>
                    <p className="body-text">{props.location.touristinformation}<a href={props.location.url}>click here!</a> </p>
                </div>
            </div>
        </div>
    )
}

export { LocationSummary }