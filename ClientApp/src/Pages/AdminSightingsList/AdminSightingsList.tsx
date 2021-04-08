import React, { FormEvent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  confirmSighting,
  fetchUnconfirmedSightings,
  ListSightings,
  Sighting,
  deleteSighting,
  restoreSighting,
  updateAndConfirmSighting
} from "../../Api/apiClient";
import "./AdminSightingsList.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faTrashAlt, faCheck, faSearch } from '@fortawesome/free-solid-svg-icons';

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
      <td className="hide-tablet">{data.quantity}</td>
      <td>{data.location}</td>
      <td className="hide-tablet nowrap">{data.sightedAt.substring(0, 10)}</td>
      <td className="btn-column nowrap">
        <Link to={`/admin/confirm-sighting/${data.id}`}>
          <button type="button" className="btn btn-warning btn-responsive btn-desktop" disabled={confirmClicked || deleteClicked} aria-disabled={confirmClicked || deleteClicked}>
            Review
          </button>
          <button type="button" className="btn btn-warning btn-mobile" disabled={confirmClicked || deleteClicked} aria-disabled={confirmClicked || deleteClicked}>
            <FontAwesomeIcon icon={faSearch} /> 
          </button>
        </Link>
      </td>
      <td className="btn-column nowrap">
        <button type="button" className="btn btn-success btn-responsive btn-desktop" onClick={() => ConfirmSightingRequest(data.id)} disabled={deleteClicked} aria-disabled={deleteClicked}>
          {confirmClicked ? "Undo" : "Confirm"}
        </button>
        <button type="button" className="btn btn-success btn-mobile" onClick={() => ConfirmSightingRequest(data.id)} disabled={deleteClicked} aria-disabled={deleteClicked}>
          {confirmClicked ? <FontAwesomeIcon icon={faUndo} /> : <FontAwesomeIcon icon={faCheck} /> }
        </button>
      </td>
      <td className="btn-column nowrap">
        <button type="button" className="btn btn-danger btn-responsive  btn-desktop" onClick={() => DeleteSightingRequest(data.id)} disabled={confirmClicked} aria-disabled={confirmClicked}>
          {deleteClicked ? "Undo" : "Delete"}
        </button>
        <button type="button" className="btn btn-danger btn-mobile" onClick={() => DeleteSightingRequest(data.id)} disabled={confirmClicked} aria-disabled={confirmClicked}>
          {deleteClicked ? <FontAwesomeIcon icon={faUndo} /> : <FontAwesomeIcon icon={faTrashAlt} />}
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

  useEffect(() => {
    fetchUnconfirmedSightings()
    .then((data) => setUnconfirmedSightingsData(data));
  }, []);

  if (!unconfirmedSightingsData) {
    return <div className="content-container"> <p className="body-text">Waiting for data!</p></div>;
  }

  return (
    <div className="content-container">
      <h1 className="title">Review Sightings</h1>
      <table className="table table-hover body-text admin-table">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Species</th>
          <th scope="col" className="hide-tablet">Quantity</th>
          <th scope="col">Location</th>
          <th scope="col" className="hide-tablet">Date</th>
          <th scope="col" className="btn-column"></th>
          <th scope="col" className="btn-column"></th>
          <th scope="col" className="btn-column"></th>
        </tr>

        {unconfirmedSightingsData.sightings?.map((x) => <TableRow {...x} />)}
      </table>
    </div>
  );
}
