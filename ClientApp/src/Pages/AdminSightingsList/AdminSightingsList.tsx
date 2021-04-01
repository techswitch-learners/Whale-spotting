import React, { FormEvent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  fetchUnconfirmedSightings,
  ListSightings,
  Sighting,
} from "../../Api/apiClient";
import "./AdminSightingsList.scss";

export function TableRow(data: Sighting): JSX.Element {
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
        <button type="button" className="btn btn-warning">
          Review
        </button>
      </td>
      <td>
        <button type="button" className="btn btn-success">
          Confirm
        </button>
      </td>
      <td>
        <button type="button" className="btn btn-danger">
          Delete
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
    return <div className="content-container"> <p className="body-text"> Waiting for data!</p></div>;
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

        {unconfirmedSightingsData.sightings?.map((x) => TableRow(x))}
      </table>
    </div>
  );
}
