import React, { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { submitSighting } from "../../Api/apiClient";
import "./SubmitSighting.scss";
import "bootstrap";

type FormStatus = "READY" | "SUBMITTING" | "ERROR" | "FINISHED";

export function SubmitSightingForm(): JSX.Element {
  const [species, setSpecies] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [description, setDescription] = useState("");
  const [sightedAt, setSightedAt] = useState("");
  const [submittedByName, setSubmittedByName] = useState("");
  const [submittedByEmail, setSubmittedByEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("READY");

  function submitForm(event: FormEvent) {
    event.preventDefault();
    setStatus("SUBMITTING");
    submitSighting({
      species,
      quantity,
      location,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      description,
      sightedAt,
      submittedByName,
      submittedByEmail,
    })
      .then(() => setStatus("FINISHED"))
      .catch(() => setStatus("ERROR"));
  }

  if (status === "FINISHED") {
    return (
      <div>
        <p className="body-text">Form Submitted Successfully!</p>
        <p className="body-text">Your sighitng is now under review!</p>
        <Link to="/submit-sighting">Submit another sighting?</Link>
        <br></br>
        <Link to="/">Return to Homepage?</Link>
      </div>
    );
  }

  return (
    <div className="form-page">
      <h1 className="title">Submit a Sighting:</h1>
      <form className="submit-form" onSubmit={submitForm}>
        <div className="row g-3">
          <div className="col">
            <label className="form-label">
              Species
              <input
                className="form-input"
                value={species}
                onChange={(event) => setSpecies(event.target.value)}
                placeholder="Orca"
                required
              />
            </label>
          </div>
          <div className="col">
            <label className="form-label">
              Quantity
              <input
                className="form-input"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />
            </label>
          </div>
        </div>
        <label className="form-label">
          Location
          <input
            className="form-input"
            value={location}
            placeholder="Tofino, BC"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <div className="row g-3">
          <div className="col">
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
          </div>
          <div className="col">
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
          </div>
        </div>
        <label className="form-label">
          Description
          <input
            className="form-input"
            value={description}
            placeholder="eg. swimming in a group"
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
        <div className="row g-3">
          <div className="col">
            <label className="form-label">
              Submitted by
              <input
                className="form-input"
                value={submittedByName}
                placeholder="Your Name"
                onChange={(event) => setSubmittedByName(event.target.value)}
                required
              />
            </label>
          </div>
          <div className="col">
            <label className="form-label">
              Email
              <input
                className="form-input"
                value={submittedByEmail}
                placeholder="email@example.com"
                onChange={(event) => setSubmittedByEmail(event.target.value)}
                type="email"
                required
              />
            </label>
          </div>
        </div>

        <button
          className="submit-button"
          disabled={status === "SUBMITTING"}
          type="submit"
        >
          Submit Sighting
        </button>
        {status === "ERROR" && <p>Something went wrong! Please try again.</p>}
      </form>
    </div>
  );
}
