import "./Map.scss";
import "bootstrap";
import {
  getRecentSightings,
  RecentSightingResponseList,
  Sighting,
} from "../../Api/apiClient";
import React, { Component, useEffect, useState } from "react";
import { isNullOrUndefined } from "node:util";

function Map(): JSX.Element {
  const [
    mySightings,
    setMySightings,
  ] = useState<RecentSightingResponseList | null>(null);

  useEffect(() => {
    getRecentSightings().then((data) => setMySightings(data));
  }, []);
  console.log(mySightings?.recentSightingsList);

  var displaySighting = mySightings?.recentSightingsList.find(
    (s) => s.location != null && s.location != ""
  );
  if (displaySighting != null) {
    return (
      <div id="mapid">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAocUY7en-28oZfHMK3rmX4OoAR5wViz7k&&q=${displaySighting?.location}`}
        ></iframe>
      </div>
    );
  } else {
    return (
      <div>
        <p>No recent sightings to display.</p>
      </div>
    );
  }
}

export { Map };
