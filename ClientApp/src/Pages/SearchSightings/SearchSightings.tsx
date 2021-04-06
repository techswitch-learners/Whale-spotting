import React, { FormEvent, useState } from "react";
import { submitSearch } from "../../Api/apiClient";
import { Link } from "react-router-dom";

type FormStatus = "READY" | "SUBMITTING" | "ERROR" | "FINISHED";
type PageStatus = "INITIAL" | "RESULTS";

export function SearchSightingForm(): JSX.Element {
    const [species, setSpecies] = useState("");
    const [location, setLocation] = useState("");
    const [sightedAt, setSightedAt] = useState("");
    const [formStatus, setFormStatus] = useState<FormStatus>("READY");
    const [pageStatus, setPageStatus] = useState<PageStatus>("INITIAL");

    function submitForm(event: FormEvent) {
        event.preventDefault();
        setFormStatus("SUBMITTING");
        submitSearch(
          species,
          location,
          sightedAt
          
        )
          .then(() => setPageStatus("RESULTS"))
          .catch(() => setFormStatus("ERROR"))
          .then(() => setFormStatus("READY"));
      }

      if (pageStatus === "RESULTS") {
        return (
          // Returns search bar at top, with list of matched items underneath
          <div> 
          <h1>Results:</h1>
          <form className="update-sighting-form" onSubmit={submitForm}>

            <label className="form-label">
              Species
              <input
                className="form-input"
                value={species}
                placeholder={species}
                onChange={(event) => setSpecies(event.target.value)}
              />
            </label>
    
            <label className="form-label">
              Location
              <input
                className="form-input"
                value={location}
                placeholder={location}
                onChange={(event) => setLocation(event.target.value)}
              />
            </label>
    
          <label className="form-label">
            Sighted at
            <input
              className="form-input"
              value={sightedAt}
              placeholder={sightedAt}
              onChange={(event) => setSightedAt(event.target.value)}
              type="date"
            />
          </label>
    
            <button
              className="search-button"
              disabled={formStatus === "SUBMITTING"}
              type="submit"
            >
              Update Search
            </button>
            {formStatus === "ERROR" && <p>Something went wrong! Please try again.</p>}
          </form>


        </div>
        );
      }


      return (
        <div> 
          <h1>Search Sighting:</h1>
          <form className="seacrh-sighting-form" onSubmit={submitForm}>

            <label className="form-label">
              Species
              <input
                className="form-input"
                value={species}
                onChange={(event) => setSpecies(event.target.value)}
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
            Sighted at
            <input
              className="form-input"
              value={sightedAt}
              onChange={(event) => setSightedAt(event.target.value)}
              type="date"
            />
          </label>
    
            <button
              className="search-button"
              disabled={formStatus === "SUBMITTING"}
              type="submit"
            >
              Search
            </button>
            {formStatus === "ERROR" && <p>Something went wrong! Please try again.</p>}
          </form>
        </div>
      );









}