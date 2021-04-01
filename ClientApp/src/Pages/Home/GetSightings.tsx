import React, { Component, useEffect, useState } from 'react';
import './Home.scss';


interface Sighting {
sighting: {
    location: string,
    species: string,
    quantity: string,
    sightedAt: string, 
    
}
}

function GetSightings(props: Sighting){

return(
      <tr>
        <td> {props.sighting.location} </td> 
        <td> {props.sighting.species}  </td>
        <td> {props.sighting.quantity} </td>
        <td> {props.sighting.sightedAt.substring(0,10)} </td>
        {/* <td> <a href='/'> More Info </a> </td> */}
      </tr>
  
)

}

export {GetSightings} 
   