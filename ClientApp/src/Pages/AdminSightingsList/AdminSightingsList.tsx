import React, { FormEvent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  confirmSighting,
  fetchUnconfirmedSightings,
  ListSightings,
  Sighting,
  deleteSighting,
  restoreSighting,
  fetchApiData,
  updateAndConfirmSighting
} from "../../Api/apiClient";
import "./AdminSightingsList.scss";

export function TableRow(data: Sighting): JSX.Element {

  const [confirmClicked, setConfirmClicked] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);
  
  function ConfirmSightingRequest(id: number) {
    if (!confirmClicked)
    {
      confirmSighting(id)
      .then(() => setConfirmClicked(!confirmClicked));
    } else
    {
      restoreSighting(id)
      .then(() => setConfirmClicked(!confirmClicked));
    }
  }  
  
  function DeleteSightingRequest(id: number) {
    if (!deleteClicked) 
    {
      deleteSighting(id)
      .then(() => setDeleteClicked(!deleteClicked));
    } else 
    {
      restoreSighting(id)
      .then(() => setDeleteClicked(!deleteClicked));
    }    
  }

  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.species}</td>
      <td>{data.quantity}</td>
      <td>{data.location}</td>
      <td>{data.sightedAt}</td>
      <td>{data.submittedByName}</td>
      <td>{data.submittedByEmail}</td>
      <td>
        <Link to={`/admin/confirm-sighting/${data.id}`}>
          <button type="button" className="btn btn-warning" disabled={confirmClicked || deleteClicked} aria-disabled={confirmClicked || deleteClicked}>
            Review
          </button>
        </Link>
      </td>
      <td>
        <button type="button" className="btn btn-success" onClick={() => ConfirmSightingRequest(data.id)} disabled={deleteClicked} aria-disabled={deleteClicked}>
          {confirmClicked ? "Undo" : "Confirm"}
        </button>
      </td>
      <td>
        <button type="button" className="btn btn-danger" onClick={() => DeleteSightingRequest(data.id)} disabled={confirmClicked} aria-disabled={confirmClicked}>
          {deleteClicked ? "Undo" : "Delete"}
        </button>
      </td>
    </tr>
  );
}

export function ListOfUnconfirmed(): JSX.Element {
  const [
    unconfirmedSightingsData,
    setUnconfirmedSightingsData,
  ] = useState<null | ListSightings>(null);

  const [fetchClicked, setFetchClicked] = useState(false);

  useEffect(() => {
    fetchUnconfirmedSightings()
    .then((data) => setUnconfirmedSightingsData(data));
  }, []);

  if (!unconfirmedSightingsData) {
    return <div className="content-container"> <p className="body-text">Waiting for data!</p></div>;
  }

 function AdminFetchApiData() {
  setFetchClicked(true);
  fetchApiData()
    .then(() => setFetchClicked(false));
 }

  return (
    <div className="content-container">
      <h1 className="title">Review Sightings</h1>
      <table className="table table-striped table-hover body-text">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Species</th>
          <th scope="col">Quantity</th>
          <th scope="col">Location</th>
          <th scope="col">Date</th>
          <th scope="col">Submitted by</th>
          <th scope="col">Email</th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>

        {unconfirmedSightingsData.sightings?.map((x) => <TableRow {...x} />)}
      </table>
      <button
            className="submit-button"
            onClick={() => AdminFetchApiData()}
            type="submit"
            disabled={fetchClicked} aria-disabled={fetchClicked}>
            {fetchClicked ? "Fetching Api Data" : "Fetch Api Data"}
      </button>
    </div>
  );
}
