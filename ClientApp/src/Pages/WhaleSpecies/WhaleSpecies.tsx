import "./WhaleSpecies.scss";
import "bootstrap";
import React from "react";
import { WhaleCardData, WhaleData } from "./WhaleSpeciesData";


interface PhotoViewerProps {
    WhaleData: WhaleCardData | null
}

function PhotoViewer(props: PhotoViewerProps) {
    return (
            <figure className="main-image-and-text">
                <div className ="big-image-div">
                    <img className="big-image" src={props.WhaleData?.imgSrc} alt={props.WhaleData?.title} />
                </div>
                <figcaption>
                    <h5 className="card-title sub-heading" >{props.WhaleData?.title}</h5>
                    <p className="photo-text">{props.WhaleData?.text}</p>
                    <a href={props.WhaleData?.siteLink} className="btn btn-primary">
                        Read more
                            </a>
                </figcaption>
            </figure>
    );
}

interface SmallPhotoViewerProps {
    imgSrc: string,
    onClick: () => void
}

function SmallPhotoViewer(props: SmallPhotoViewerProps) {
    return (
        <div className="little-image-div">
            <img className = "little-image" onClick={props.onClick} src={props.imgSrc} />
        </div >
    )
}

export function WhaleSpecies(): JSX.Element {
    const [currentWhale, setCurrentWhale] = React.useState(WhaleData[0]);
    return (

        <div>
            <section className="section content-container" >
                <div className="container" >
                    <h1 className="title">Whale species</h1>

                    <PhotoViewer WhaleData={WhaleData.find(x => x == currentWhale) ?? null} />
                    
                    <div className =" all-small-pictures">
                    {WhaleData.map((x) => <SmallPhotoViewer onClick={() => { setCurrentWhale(x) }} imgSrc={x.imgSrc} />)}
                    </div>
                </div>
            </section>
        </div>
    )
}