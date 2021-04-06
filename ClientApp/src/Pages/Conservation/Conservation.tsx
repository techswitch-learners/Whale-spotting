import "./Conservation.scss";
import "bootstrap";
import React from "react";
import {ConservationCardData, ConservationData} from "./ConservationData";

function ConservationCard (data: ConservationCardData): JSX.Element {
  return (
  <div key={data.title} className="col-sm">
  <div className="card">
    <img src={data.imgSrc} alt={data.title}/>
    <div className="card-body">
      <h5 className="card-title sub-heading">{data.title}</h5>
      <p className="card-text body-text">{data.text}</p>
      <a href={data.siteLink} className="btn btn-primary">
        Read more
      </a>
    </div>
  </div>
</div>)
}

export function Conservation(): JSX.Element {
  
  return (
    <div className="content-container">

      <div className="container-fluid">
          <h1 className="title">Conservation</h1>
          <p className="text-justify">
            Some good work has been done in recent decades to reverse the trend of
            almost inevitable extinction for some species of cetaceans.
            Unfortunately, whales and dolphins continue to be threatened by:
          </p>
      </div>

      <div className="container">

        <div className="row">

          {ConservationData.map(x => ConservationCard(x))}

        </div>

      </div>

      <p className="border border-dark">
        You can help immediately by donating to marine-life charities or by
        adopting a whale! To make a donation to SEA LIFE Trust, please click{" "}
        <a href="https://www.sealifetrust.org/en/"> here</a>. To adopt a marine
        animal, click{" "}
        <a href="https://www.pacificwhale.org/you-can-help/adopt-marine-animal/">
          {" "}
          here
        </a>
        .
      </p>
      
    </div>
  );
}
