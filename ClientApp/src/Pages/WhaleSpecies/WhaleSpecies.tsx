import "./WhaleSpecies.scss";
import "bootstrap";
import React from "react";
import { WhaleCardData, WhaleData } from "./WhaleSpeciesData";


function WhaleCard(data: WhaleCardData): JSX.Element {
    return (
        <div key={data.title} className="col-sm">
            <div className="card">
                <img src={data.imgSrc} alt={data.title} />
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


export function WhaleSpecies(): JSX.Element {

    return (
        <div className="content-container">

            <div className="container-fluid">
                <h1 className="title"> Whale Species</h1>
                <p className="text-justify">
                    Here are some details about the 3 main whale species:
    </p>
            </div>

            <div className="container">
                <div className="row">

                    {WhaleData.map(x => WhaleCard(x))}

                </div>
            </div>
        </div>

    )
}
