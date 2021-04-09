import "./Map.scss";
import "bootstrap";
import {
  getRecentSightings,
  RecentSightingResponseList, Sighting} from "../../Api/apiClient";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from "leaflet";
import { LatLngTuple } from 'leaflet';

const defaultLatLng: LatLngTuple = [47.5097, -122.4412];
const zoom:number = 8;

function MyComponent() {
  const map = useMap()
  console.log('map center:', map.getCenter())
  return null
}

function LeafletMap()
{
  const [mySightings,
        setMySightings,
      ] = useState<RecentSightingResponseList | null>(null);
    
      useEffect(() => {
        getRecentSightings().then((data) => setMySightings(data));
      }, []);
      console.log(mySightings?.recentSightingsList);
     // var displaySighting = mySightings?.recentSightingsList;

  if (!(mySightings?.recentSightingsList != null && mySightings?.recentSightingsList.length > 0)) {
    return <div></div>
  }
  console.log(mySightings.recentSightingsList);
   return (
   <MapContainer
  id="mapId"
  center={defaultLatLng}
           zoom={zoom}>
           <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[mySightings?.recentSightingsList[0].latitude, mySightings?.recentSightingsList[0].longitude]}>
    <Popup>
    {mySightings?.recentSightingsList[0].location}
    </Popup>
  </Marker>

  <Marker position={[mySightings?.recentSightingsList[1].latitude, mySightings?.recentSightingsList[1].longitude]}>
    <Popup>
    {mySightings?.recentSightingsList[1].location}
    </Popup>
  </Marker>
  <Marker position={[mySightings?.recentSightingsList[2].latitude, mySightings?.recentSightingsList[2].longitude]}>
  <Popup>
      {mySightings?.recentSightingsList[2].location}
    </Popup>
  </Marker>
  <Marker position={[mySightings?.recentSightingsList[3].latitude, mySightings?.recentSightingsList[3].longitude]}>
  <Popup>
      {mySightings?.recentSightingsList[3].location}
    </Popup>
  </Marker>
   <Marker position={[mySightings?.recentSightingsList[4].latitude, mySightings?.recentSightingsList[4].longitude]}>
  <Popup>
      {mySightings?.recentSightingsList[4].location}
    </Popup>
  </Marker>
     </MapContainer>
     
   )
      }


export { LeafletMap };
