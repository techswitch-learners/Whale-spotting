import React, { Component, useEffect, useState } from 'react';
import './Home.scss';
import { GetSightings } from './GetSightings';
import { getRecentSightings } from '../../Api/apiClient';
import { SightingResponse, RecentSightingResponseList } from '../../Api/apiClient';

function Home() {

  const [mySightings, setMySightings] = useState<RecentSightingResponseList | null>(null);

  useEffect(() => {
    getRecentSightings()
      .then(data => setMySightings(data));
  }, []);

  return (
    <div className="content-container">
      <h1 className="title">Welcome to the World of Whale Watching!</h1>

      {/*Fact of the Day*/}

      <h2 className="sub-heading">What is Whale Watching?</h2>

      <p className="body-text">It's exactly what it sounds like! Whale watching is the practice of observing whales and orcas in their natural habitat.
      There are lots of different reasons to go whale watching: scientific research, educational purposes or just for fun! Anyone
      can go whale watching. This site will help answer some questions you might have and give you some information on how you can
      get started and get involved.</p>

      <p className="body-text">An estimated 13 million people went whale watching globally in 2008 and the numbers are growing. Responsible whale watching
      has benefitted conservation efforts through education and raising awareness of the challenges that whales and orcas currently face.
      Many species of whales and orcas are currently listed as endangered. The responsibility lies with us, together we can help change
      and stop harmful practices that negatively impact the whale and orca populations.</p>

      <div className="video-and-sightings-container">
        <div className="watch-whales-container">
          <h2 className="sub-heading">Watch Whales Live</h2>
          <div className="video-container">
            <iframe className="video" src="https://www.youtube.com/embed/FiaDOY06VwI" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
        <div className="whale-sightings-container">
          <h2 className="sub-heading">Recent Sightings</h2>
          {/* this table is a placeholder, feel free to delete when inserting the actual table */}
          <table className="sightings-table">
            <thead>
              <tr>
                <td>Location</td>
                <td>Species</td>
                <td>Number of Whales Spotted</td>
                <td>Seen on</td>
              </tr>
            </thead>
            <tbody>
              {mySightings?.recentSightingsList.map((sighting) => <GetSightings sighting={sighting} key={sighting.id}/>)}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export { Home }
