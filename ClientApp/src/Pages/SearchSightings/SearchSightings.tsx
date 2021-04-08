import React, { FormEvent, useState, useEffect } from "react";
import { submitSearch, Sighting, SearchResponse } from "../../Api/apiClient";
import { Link } from "react-router-dom";
import "./SearchSightings.scss";
import { resourceLimits } from "node:worker_threads";



type FormStatus = "READY" | "SUBMITTING" | "ERROR" | "FINISHED";
type PageStatus = "INITIAL" | "RESULTS";

export function SearchSightingForm(): JSX.Element {
    const [species, setSpecies] = useState("");
    const [location, setLocation] = useState("");
    const [sightedAt, setSightedAt] = useState("");
    const [formStatus, setFormStatus] = useState<FormStatus>("READY");
    const [pageStatus, setPageStatus] = useState<PageStatus>("INITIAL");
    const [searchResults, setSearchResults] = useState<null | SearchResponse>(null);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);


    function submitForm(event: FormEvent) {
      event.preventDefault();
      setPage(1);
      setFormStatus("SUBMITTING");
      submitSearch(
        species,
        location,
        sightedAt,
        1,
        pageSize
      ).then((data) => setSearchResults(data))
      .catch(() => setFormStatus("ERROR"))
      .then(() => setPageStatus("RESULTS"))
      .then(() => setFormStatus("READY"));     
    }

    function results(){
      return (
        <table className="results-table">
        
          <p>Showing results {(page*10) - 9} - {page*10}</p>
          
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Species</th>
          <th scope="col">Quantity</th>
          <th scope="col">Location</th>
          <th scope="col">Description</th>
          <th scope="col">Date</th>
          <th scope="col">Submitted by</th>
        </tr>

        {searchResults?.sightings?.map(x => searchRow(x))}
      </table>
      )
    }

    function noResults(){
      return (
        <p>No Matching Results Found</p>
      )
    }

    function searchRow(data: Sighting): JSX.Element {
        return (
          <tr>
            <td>{data.id}</td>
            <td>{data.species}</td>
            <td>{data.quantity}</td>
            <td>{data.location}</td>
            <td>{data.description}</td>
            <td>{data.sightedAt}</td>
            <td>{data.submittedByName}</td>
          </tr>
        );
    }

    function previousPageButton(){
      return(
        <a className="previous-button" onClick={() => previousPage()} > &lt; </a>
      )
    }

    function previousPage(){ 
     submitSearch(
        species,
        location,
        sightedAt,
        page - 1,
        pageSize
      ).then((data) => setSearchResults(data));
      setPage(page - 1)
    }

    function nextPageButton(){
      return(
        <a className="next-button" onClick={() => nextPage()} > &gt; </a>
      )
    }

    function nextPage(){
      submitSearch(
        species,
        location,
        sightedAt,
        page + 1 ,
        pageSize
      ).then((data) => setSearchResults(data));
      setPage(page + 1)
    }
    

    

      if (pageStatus === "RESULTS") {
        return (
          // Returns search bar at top, with list of matched items underneath
          <div> 
          <h1 className="title">Results:</h1>
          <form className="update-search-form" onSubmit={submitForm}>


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
              className="update-search-button"
              disabled={formStatus === "SUBMITTING"}
              type="submit"
            >
            Update Search
            </button>
            {formStatus === "ERROR" && <p>Something went wrong! Please try again.</p>}
          </form>
        
        {searchResults?.sightings && searchResults.sightings.length> 0 ? results() : noResults() }
        
       {/* Check for next or previous page button */}
       <div className="pagination">
         {page > 1? previousPageButton(): "" }
         <p className="page">  {page}  </p>
         {searchResults?.totalNumberOfItems &&  searchResults?.totalNumberOfItems - (pageSize * page)? nextPageButton(): null }
       </div>
        
        </div>
        );
      }


      return (
        
        <div className="content-container"> 
          <h1 className="title">Search Sighting:</h1>
          <form className="search-sighting-form body-text" onSubmit={submitForm}>

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
              className="submit-button"
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