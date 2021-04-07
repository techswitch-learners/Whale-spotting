import "./WhaleSpecies.scss";
import "bootstrap";
import React from "react";
import { WhaleCardData, WhaleData } from "./WhaleSpeciesData";


function Photo(data: WhaleCardData): JSX.Element {
    return (
<li className="carousel__slide">
<figure>
    <div>
    <img src={data.imgSrc} alt={data.title} />
    </div>
    <figcaption>
        <h5 className="card-title sub-heading" >{data.title}</h5> 
<p className = "photo-text">{data.text}</p>
        <a href={data.siteLink} className="btn btn-primary">
                        Read more
                </a>                        
    </figcaption>
</figure>
</li>
    )
}

export function WhaleSpecies(): JSX.Element {
    return (
 <section className ="section">
    <div className="container" >
        <div className="carousel" >
            <input type="radio" name="slides" checked id="slide-1" />
            <input type="radio" name="slides" id="slide-2" />
            <input type="radio" name="slides" id="slide-3" />

            <ul className="carousel__slides">
                {WhaleData.map(x=> Photo(x))}
            </ul>    
            <ul className="carousel__thumbnails">
                <li>
                    <label htmlFor="slide-1"><img src={WhaleData[0].imgSrc} alt={WhaleData[0].title} /></label>
                </li>
                <li>
                    <label htmlFor="slide-2"><img src={WhaleData[1].imgSrc} alt={WhaleData[1].title} /></label>
                </li>
                <li>
                    <label htmlFor="slide-3"><img src={WhaleData[2].imgSrc} alt={WhaleData[2].title} /></label>
                </li>
            </ul>
        </div>
    </div>
</section>
)
}
