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
                <img className='location-image' src={props.location.imagesrc} alt='Image of Location' />
                <div className='LocationTable'>
                    <h6 className="sub-heading">Why Should I Visit?</h6>
                    <p data-testid="description">{props.location.description}</p>
                    <h6 className="sub-heading">Which Whale Species are Common here?</h6>
                    <p> {props.location.whalespecies} </p>
                    <h6 className="sub-heading">When is the Best Time of Year to go?</h6>
                    <p> {props.location.besttimeofyear} </p>
                    <h6 className="sub-heading">How Can I Book a Tour?</h6>
                    <p>{props.location.touristinformation}<a href={props.location.url}>click here!</a> </p>
                </div>
            </div>
        </div>
    )
}

export { LocationSummary }