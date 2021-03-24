import React, {FormEvent, useState} from "react";
// import {Page} from "../Page/Page";
//import {createPost} from "../../Api/apiClient";
import {Link} from "react-router-dom";
import "./SubmitSighting.scss";

type FormStatus = "READY" | "SUBMITTING" | "ERROR" | "FINISHED"

export function SubmitSightingForm(): JSX.Element {
    const [species, setSpecies] = useState("");
    const [quantity, setQuantity] = useState("");
    const [location, setLocation] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [description, setDescription] = useState("");
    const [sightedAt, setSightedAt] = useState("");
    const [submittedBy, setSubmittedBy] = useState("");
    const [email, setEmail] = useState("");
    

    function submitForm(event: FormEvent) {
        event.preventDefault();
        // setStatus("SUBMITTING");
        // createPost({message, imageUrl, userId: parseInt(userId)})
        //     .then(() => setStatus("FINISHED"))
        //     .catch(() => setStatus("ERROR"));
    }
    
    if (status === "FINISHED") {
        return <div>
            <p>Form Submitted Successfully!</p>
            <Link to="/">Submit another sighting?</Link>
            <Link to="/">Return to Homepage?</Link>
        </div>
    }

    return (
        <form className="submit-sighting-form" onSubmit={submitForm}>
            <label className="form-label">
                Species
                <input className="form-input" value={species} onChange={event => setSpecies(event.target.value)}/>
            </label>

            <label className="form-label">
                Quantity
                <input className="form-input" value={quantity} onChange={event => setQuantity(event.target.value)}/>
            </label>

            <label className="form-label">
                Location
                <input className="form-input" value={location} onChange={event => setLocation(event.target.value)}/>
            </label>

            <label className="form-label">
                Latitude
                <input className="form-input" value={latitude} onChange={event => setLatitude(event.target.value)}/>
            </label>

            <label className="form-label">
                Longitude
                <input className="form-input" value={longitude} onChange={event => setLongitude(event.target.value)}/>
            </label>

            <label className="form-label">
                Description
                <input className="form-input" value={description} onChange={event => setDescription(event.target.value)}/>
            </label>

            <label className="form-label">
                Sighted at
                <input className="form-input" value={sightedAt} onChange={event => setSightedAt(event.target.value)}/>
            </label>

            <label className="form-label">
                Submitted by
                <input className="form-input" value={submittedBy} onChange={event => setSubmittedBy(event.target.value)}/>
            </label>

            <label className="form-label">
                Email
                <input className="form-input" value={email} onChange={event => setEmail(event.target.value)}/>
            </label>

            <button className="submit-button" disabled={status === "SUBMITTING"} type="submit">Submit Sighting</button>
            {status === "ERROR" && <p>Something went wrong! Please try again.</p>}
        </form>
    );
}

// export function SubmitSighting(): JSX.Element {
//     return (
//         <Page containerClassName="submit-sighting-page">
//             <h1 className="title">Create Post</h1>
//             <SubmitSightingForm/>
//         </Page>
//     );
// }