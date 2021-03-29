import React from 'react';

interface LocationSummary {
    location: {
        name: string,
        imagesrc: string,
        description: string,
        whalespecies: string,
        besttimeofyear: string,
        touristinformation: string,
        url: string,
    }
}

function LocationSummary(props: LocationSummary): JSX.Element {

    return (
        <div>
            <h2> {props.location.name}</h2>
            <div className='location-line-break'></div>
            <div className='image-and-text'>
                <img className='locationImage' src={props.location.imagesrc} width='400px' height='400px' alt='Image of Location' />
                <div className='LocationTable'>
                    <h6>Why Should I Visit?</h6>
                    <p>{props.location.description}</p>
                    <h6>Which Whale Species are Common here?</h6>
                    <p> {props.location.whalespecies} </p>
                    <h6>When is the Best Time of Year to go?</h6>
                    <p> {props.location.besttimeofyear} </p>
                    <h6>How Can I Book a Tour?</h6>
                    <p>{props.location.touristinformation}<a href={props.location.url}>click here!</a> </p>
                </div>
            </div>
        </div>

    )
}

export { LocationSummary }