import React, { FormEvent, useState, useEffect } from "react";
import { useParams } from "react-router";
import { getSighting } from "../../Api/apiClient";
import "./ConfirmSighting.scss";

export function ConfirmSightingForm(): JSX.Element {
  const [status, setStatus] = useState("LOADING");
  const [button, setButton] = useState("");
  const [apiId, setApiId] = useState("");
  const [species, setSpecies] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [description, setDescription] = useState("");
  const [sightedAt, setSightedAt] = useState("");
  const [submittedByName, setSubmittedByName] = useState("");
  const [submittedByEmail, setSubmittedByEmail] = useState("");
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    getSighting(parseInt(id))
    .then(response => {
      setStatus("FINISHED");
      setApiId(response.apiId);
      setSpecies(response.species);
      setQuantity(response.quantity);
      setLocation(response.location);
      setLatitude(response.latitude.toString());
      setLongitude(response.longitude.toString());
      setDescription(response.description);
      setSightedAt(response.sightedAt);
      setSubmittedByName(response.submittedByName);
      setSubmittedByEmail(response.submittedByEmail);
    });
  }, []);

  function confirmOrDeleteSighting(event: FormEvent) {
    event.preventDefault();
    if (button == "confirm") {
      // call the function to update the database
    } else if (button == "delete") {
      // delete the record
    }
  }

  return (
    <div className="content-container">
      <h1 className="title">Review Sighting</h1>
      {status === "LOADING" && <p className="body-text">Waiting for data!</p>}
      {status === "FINISHED" && 
        <form className="submit-sighting-form body-text" onSubmit={confirmOrDeleteSighting}>
          <label className="form-label">
            Species
            <input
              className="form-input"
              value={species}
              onChange={(event) => setSpecies(event.target.value)}
              required
            />
          </label>
  
          <label className="form-label">
            Quantity
            <input
              className="form-input"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
          </label>
  
          <label className="form-label">
            Location
            <input
              className="form-input"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </label>
  
          <label className="form-label">
            Latitude
            <input
              className="form-input"
              value={latitude}
              onChange={(event) => setLatitude(event.target.value)}
              type="number"
              required
            />
          </label>
  
          <label className="form-label">
            Longitude
                  <input
              className="form-input"
              value={longitude}
              onChange={(event) => setLongitude(event.target.value)}
              type="number"
              required
            />
          </label>
  
          <label className="form-label">
            Description
                  <input
              className="form-input"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
  
          <label className="form-label">
            Sighted at
                  <input
              className="form-input"
              value={sightedAt}
              onChange={(event) => setSightedAt(event.target.value)}
              type="date"
              required
            />
          </label>
  
          <label className="form-label">
            Submitted by
                  <input
              className="form-input"
              value={submittedByName}
              onChange={(event) => setSubmittedByName(event.target.value)}
              disabled
            />
          </label>
  
          <label className="form-label">
            Email
                  <input
              className="form-input"
              value={submittedByEmail}
              onChange={(event) => setSubmittedByEmail(event.target.value)}
              type="email"
              disabled
            />
          </label>
  
          <button
            className="submit-button"
            onClick={() => setButton("confirm")}
            type="submit"
          >
            Confirm
          </button>
          <button
            className="submit-button"
            onClick={() => setButton("delete")}
            type="submit"
            value="delete"
          >
            Delete
          </button>
        </form>
      }
    </div>
  );

  

  // return (
  //   <form className="submit-sighting-form" onSubmit={confirmOrDeleteSighting}>
  //     <label className="form-label">
  //       Species
  //       <input
  //         className="form-input"
  //         value={species}
  //         onChange={(event) => setSpecies(event.target.value)}
  //         required
  //       />
  //     </label>

  //     <label className="form-label">
  //       Quantity
  //       <input
  //         className="form-input"
  //         value={quantity}
  //         onChange={(event) => setQuantity(event.target.value)}
  //       />
  //     </label>

  //     <label className="form-label">
  //       Location
  //       <input
  //         className="form-input"
  //         value={location}
  //         onChange={(event) => setLocation(event.target.value)}
  //       />
  //     </label>

  //     <label className="form-label">
  //       Latitude
  //       <input
  //         className="form-input"
  //         value={latitude}
  //         onChange={(event) => setLatitude(event.target.value)}
  //         type="number"
  //         required
  //       />
  //     </label>

  //     <label className="form-label">
  //       Longitude
  //             <input
  //         className="form-input"
  //         value={longitude}
  //         onChange={(event) => setLongitude(event.target.value)}
  //         type="number"
  //         required
  //       />
  //     </label>

  //     <label className="form-label">
  //       Description
  //             <input
  //         className="form-input"
  //         value={description}
  //         onChange={(event) => setDescription(event.target.value)}
  //       />
  //     </label>

  //     <label className="form-label">
  //       Sighted at
  //             <input
  //         className="form-input"
  //         value={sightedAt}
  //         onChange={(event) => setSightedAt(event.target.value)}
  //         type="date"
  //         required
  //       />
  //     </label>

  //     <label className="form-label">
  //       Submitted by
  //             <input
  //         className="form-input"
  //         value={submittedByName}
  //         onChange={(event) => setSubmittedByName(event.target.value)}
  //         disabled
  //       />
  //     </label>

  //     <label className="form-label">
  //       Email
  //             <input
  //         className="form-input"
  //         value={submittedByEmail}
  //         onChange={(event) => setSubmittedByEmail(event.target.value)}
  //         type="email"
  //         disabled
  //       />
  //     </label>

  //     <button
  //       className="submit-button"
  //       onClick={() => setButton("confirm")}
  //       type="submit"
  //     >
  //       Confirm
  //     </button>
  //     <button
  //       className="submit-button"
  //       onClick={() => setButton("delete")}
  //       type="submit"
  //       value="delete"
  //     >
  //       Delete
  //     </button>
  //   </form>
  // );
}
