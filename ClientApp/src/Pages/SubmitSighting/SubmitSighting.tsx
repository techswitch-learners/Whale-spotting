﻿import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import "./SubmitSighting.scss";

type FormStatus = "READY" | "SUBMITTING" | "ERROR" | "FINISHED";

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
  const [status, setStatus] = useState<FormStatus>("READY");

  function submitForm(event: FormEvent) {
    event.preventDefault();
    setStatus("SUBMITTING");
    // CreatePost()
    //     .then(() => setStatus("FINISHED"))
    //     .catch(() => setStatus("ERROR"));
  }

  if (status === "FINISHED") {
    return (
      <div>
        <p>Form Submitted Successfully!</p>
        <Link to="/submit-sighting">Submit another sighting?</Link>
        <br></br>
        <Link to="/">Return to Homepage?</Link>
      </div>
    );
  }

  return (
    <form className="submit-sighting-form" onSubmit={submitForm}>
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
          required
        />
      </label>

      <label className="form-label">
        Longitude
        <input
          className="form-input"
          value={longitude}
          onChange={(event) => setLongitude(event.target.value)}
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
          required
        />
      </label>

      <label className="form-label">
        Submitted by
        <input
          className="form-input"
          value={submittedBy}
          onChange={(event) => setSubmittedBy(event.target.value)}
          required
        />
      </label>

      <label className="form-label">
        Email
        <input
          className="form-input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>

      <button
        className="submit-button"
        disabled={status === "SUBMITTING"}
        type="submit"
      >
        Submit Sighting
      </button>
      {status === "ERROR" && <p>Something went wrong! Please try again.</p>}
    </form>
  );
}
