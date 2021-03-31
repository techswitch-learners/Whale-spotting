import React, { Component, useEffect, useState } from 'react';
import './Home.scss';


interface Sighting {
sighting: {
    Location: string,
    Species: string,
    SightedAt: string, //Datetime problem
    SubmittedByName: string
}
}

function GetSightings(props: Sighting){

return(
      <tr>
        <td> {props.sighting.Location} </td> 
        <td> {props.sighting.Species}  </td>
        <td> {props.sighting.SightedAt} </td>
        <td> {props.sighting.SubmittedByName} </td>
        <td> <a href='/'> More Info </a>  </td>
      </tr>
  
)

}

export {GetSightings} 
   