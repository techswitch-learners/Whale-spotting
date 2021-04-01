import React, { Component, useEffect, useState } from 'react';
import './Home.scss';


interface Sighting {
sighting: {
    location: string,
    species: string,
    sightedAt: string, //Datetime problem
    submittedByName: string
}
}

function GetSightings(props: Sighting){

return(
      <tr>
        <td> {props.sighting.location} </td> 
        <td> {props.sighting.species}  </td>
        <td> {props.sighting.sightedAt} </td>
        <td> {props.sighting.submittedByName} </td>
        <td> <a href='/'> More Info </a>  </td>
      </tr>
  
)

}

export {GetSightings} 
   