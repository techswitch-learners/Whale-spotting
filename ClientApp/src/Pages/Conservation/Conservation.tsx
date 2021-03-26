import "./Conservation.scss";
import "bootstrap";
import React from "react";
import * as ConservationData from "./ConservationData.json";

export function Conservation(): JSX.Element {
  return (
    <div>

      <div className="container-fluid">
          <h2 className="conservation-title">Conservation</h2>
          <p className="text-justify">
            Some good work has been done in recent decades to reverse the trend of
            almost inevitable extinction for some species of cetaceans.
            Unfortunately, whales and dolphins continue to be threatened by:
          </p>
      </div>

      <div className="container">

        <div className="row">

          <div className="col-sm">
            <div className="card">
              <img src={ConservationData.Pollution.imgSrc} alt="pollution"/>
              <div className="card-body">
                <h5 className="card-title">Pollution</h5>
                <p className="card-text">{ConservationData.Pollution.text}</p>
                <a href={ConservationData.Pollution.siteLink} className="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="card">
              <img src={ConservationData.Nets.imgSrc} className="card-img-top" alt="nets" />
              <div className="card-body">
                <h5 className="card-title">Nets</h5>
                <p className="card-text">{ConservationData.Nets.text}</p>
                <a href={ConservationData.Nets.siteLink} className="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="card">
              <img src={ConservationData.Whaling.imgSrc} className="card-img-top" alt="whaling" />
              <div className="card-body">
                <h5 className="card-title">Whaling</h5>
                <p className="card-text">{ConservationData.Whaling.text}</p>
                <a href={ConservationData.Whaling.siteLink} className="btn btn-primary" >
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="card">
              <img
                src={ConservationData.Captivity.imgSrc} className="card-img-top" alt="captivity"/>
              <div className="card-body">
                <h5 className="card-title">Captivity</h5>
                <p className="card-text">{ConservationData.Captivity.text}</p>
                <a href={ConservationData.Captivity.siteLink} className="btn btn-primary">
                  Read more
                </a>
              </div>
            </div>
          </div>

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
