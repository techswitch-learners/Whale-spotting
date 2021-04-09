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
      ] = useState<RecentSightingResponseList>(Object);
    
      useEffect(() => {
        getRecentSightings().then((data) => setMySightings(data));
      }, []);
      console.log(mySightings?.recentSightingsList);
     // var displaySighting = mySightings?.recentSightingsList;

      // if(displaySighting!=null){         
     
   return (
   <MapContainer
id="mapId"
center={defaultLatLng}
           zoom={zoom}>
           <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[47.5083, -122.4409]}>
  <Popup>
    Vashon
    </Popup>
  </Marker>
  <Marker position={[mySightings.recentSightingsList[0].latitude, mySightings.recentSightingsList[0].longitude]}>
    <Popup>
    {mySightings?.recentSightingsList[0].location}
    </Popup>
  </Marker>
{/* 
  <Marker position={`[${mySightings?.recentSightingsList[1].latitude}, ${mySightings?.recentSightingsList[1].longitude}]`}>
    <Popup>
    {mySightings?.recentSightingsList[1].location}
    </Popup>
  </Marker>
  <Marker position={`[${mySightings?.recentSightingsList[2].latitude}, ${mySightings?.recentSightingsList[2].longitude}]`}>
  <Popup>
      {mySightings?.recentSightingsList[2].location}
    </Popup>
  </Marker>
  <Marker position={`[${mySightings?.recentSightingsList[3].latitude}, ${mySightings?.recentSightingsList[3].longitude}]`}>
  <Popup>
      {mySightings?.recentSightingsList[3].location}
    </Popup>
  </Marker>
   <Marker position={`[${mySightings?.recentSightingsList[4].latitude}, ${mySightings?.recentSightingsList[4].longitude}]`}>
  <Popup>
      {mySightings?.recentSightingsList[4].location}
    </Popup>
  </Marker> */}
     </MapContainer>
     
   )
      }


// function Map(): JSX.Element {
//   const [
//     mySightings,
//     setMySightings,
//   ] = useState<RecentSightingResponseList | null>(null);

//   useEffect(() => {
//     getRecentSightings().then((data) => setMySightings(data));
//   }, []);
//   console.log(mySightings?.recentSightingsList);

//   var displaySighting = mySightings?.recentSightingsList.find(
//     (s) => s.location != null && s.location != ""
//   );
//   if (displaySighting != null) {
//     return (
//       <div id="mapid">
//         <iframe
//           src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAocUY7en-28oZfHMK3rmX4OoAR5wViz7k&&q=${displaySighting?.location}`}
//         ></iframe>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <p>No recent sightings to display.</p>
//       </div>
//     );
//   }
// }

// function LeafletMap(){
//   return(
//     <div>
//        <div id="mapid"></div>
//       map
// <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//   <TileLayer
//     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//   />
//   <Marker position={[51.505, -0.09]}>
//     <Popup>
//       A pretty CSS3 popup. <br /> Easily customizable.
//     </Popup>
//   </Marker>
// </MapContainer> 
// </div>
//   );
// }
// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
//     maxZoom: 18,
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
//                  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
//                  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     id: 'mapbox.streets'
// }).addTo(mymap);

export { LeafletMap };
