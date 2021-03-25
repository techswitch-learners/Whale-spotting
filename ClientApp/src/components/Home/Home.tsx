import React, { Component } from 'react';
import './Home.scss';


function Home() {
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
              <iframe className="video" src="https://www.youtube.com/embed/FiaDOY06VwI" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>

        <div className="whale-sightings-container">
          <h2>Recent Whale Sightings</h2>
          {/* this table is a placeholder, feel free to delete when inserting the actual table */}
          <table>
            <tr>
          <th> Location </th>
          <th> Species </th>
          <th> Date </th> 
          <th> Submitted By </th>
        </tr>
        <tr>
          <td> Canada </td> 
          <td> Orca </td>
          <td> 22/02/2021</td>
          <td> Chloe </td>
          <td> <a href='/'> More Info </a>  </td>
        </tr>
          </table>
        </div>
      </div>
    </div>


  );
}


export { Home }
