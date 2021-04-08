import React, { Component, useEffect, useState } from "react";
import "./Home.scss";

interface Sighting {
  sighting: {
    location: string,
    species: string,
    quantity: string,
    sightedAt: string,
  }
}

function GetSightings(props: Sighting) {
  if (props.sighting.location == "") {
    props.sighting.location = "Unknown";
  }

  return (
    <tr>
      <td> {props.sighting.location} </td>
      <td> {props.sighting.species} </td>
      <td> {props.sighting.quantity} </td>
      <td> {props.sighting.sightedAt.substring(0, 10)} </td>
    </tr>
  );
}

export { GetSightings }
