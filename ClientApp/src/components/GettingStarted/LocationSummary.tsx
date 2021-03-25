import React from 'react';


interface LocationSummary {
    location: {
      name: string,
      imagesrc: string,
      description: string,
      whalespecies: string,
      besttimeofyear: string,
      touristinformation: string
      
    }
  }


function LocationSummary(props: LocationSummary): JSX.Element {
  
    return (
      <div>
            <h2> {props.location.name} Location:</h2>
            <img className='locationImage' src={props.location.imagesrc}  width='200px' height='200px' alt='Image of Location' />
            <h3> Useful Information:</h3>
            <table className='LocationTable'>
                <tbody>
                    <tr>
                        <th>Why Should I Visit?</th>
                        <th>{props.location.description}</th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>Which Whale Species are Common here?</th>
                        <th> {props.location.whalespecies} </th>
                    </tr>
                    <tr>
                        <th>When is the Best Time of Year to go?</th>
                        <th> {props.location.besttimeofyear} </th>
                    </tr>
                    <tr>
                        <th>How Can I Book a Tour?</th>
                        <th> {props.location.touristinformation} </th>
                    </tr>
                </tbody>
            </table>
            </div>
     
    )
  }
  
  export { LocationSummary }