import React, { Component, useEffect, useState } from 'react';
import './Home.scss';
import { GetSightings } from './GetSightings';
import {getRecentSightings} from '../../Api/apiClient';
import {SightingResponse} from '../../Api/apiClient';

function Home() {

  const [myData, setMyData] = useState(<SightingResponse>[])([]);

   getRecentSightings()

  {/* useEffect(() => {
    fetch("https://localhost:5001/recentsightings")
      .then(response => response.json())
      .then(data => setMyData(data));
  }, []); */}

  

  return (
    <div>
      <h1>Welcome to the World of Whale Watching!</h1>

      {/*Fact of the Day*/}

      <h2>What is Whale Watching?</h2>

      <p>It's exactly what it sounds like! Whale watching is the practice of observing whales and orcas in their natural habitat.
      There are lots of different reasons to go whale watching: scientific research, educational purposes or just for fun! Anyone
      can go whale watching. This site will help answer some questions you might have and give you some information on how you can
      get started and get involved.</p>

      <p>An estimated 13 million people went whale watching globally in 2008 and the numbers are growing. Responisble whale watching
      has benefitted conservation efforts through education and raising awareness of the challenges that whales and orcas currently face.
      Many species of whales and orcas are currently listed as endangered. The responsibilty lies with us, together we can help change
      and stop harmful practices that negatively impact the whale and orca populations.</p>

      <div className="video-and-sightings-container">
        <div className="watch-whales-container">
          <h2>Watch Whales Live</h2>
          <div className="video-container">
            <iframe className="video" src="https://www.youtube.com/embed/FiaDOY06VwI" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
        <div className="whale-sightings-container">
          <h2>Recent Whale Sightings</h2>
          
          <table>
            <thead>
              <td>Location</td>
              <td>Species</td>
              <td>Seen on</td>
              <td>Seen by</td>
            </thead> 
            <tbody>   
            <tr>   
          {myData.RecentSightingsList.map(<SightingResponse>sighting=> <GetSightings sighting={sighting} />)}
          </tr> 
          </tbody> 
      </table>

      </div>
          </div>
    </div>

  );


}
export { Home}
    