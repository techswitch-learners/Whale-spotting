import React, { FormEvent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchUnconfirmedSightings, ListSightings, Sighting } from "../../Api/apiClient";


function TableRow(data: Sighting): JSX.Element{
        return (
        <tr>
                <td>{data.id}</td>
                <td>{data.species}</td>
                <td>{data.quantity}</td>
                <td>{data.location}</td>
                <td>{data.sightedAt}</td>
                <td>{data.submittedByName}</td>
                <td>{data.submittedByEmail}</td>
        </tr>
        )
      }


function listOfUnconfirmed(){
    const [unconfirmedSightingsData, setUnconfirmedSightingsData] = useState<null | ListSightings>(null); 

    useEffect(() =>{
        fetch(`api/confirm-sighting`)
            .then(response => response.json())
            .then(data => setUnconfirmedSightingsData(data));
    }, []);
    
    // {fetchUnconfirmedSightings()       
    //          .then(data => setUnconfirmedSightingsData(data));
    // }, []);

    if (!unconfirmedSightingsData) {
        return <div> Waiting for data!</div>
    }

    return (
            <div>
                <h2 className='featureTitle'>Sightings review</h2>
                <table>
                        <tr>
                                <th>ID</th>
                                <th>Species</th>
                                <th>Quantity</th>
                                <th>Location</th>
                                <th>Date</th>
                                <th>Submitted by</th>
                                <th>Email</th>
                        </tr>
                       
                        {unconfirmedSightingsData.sightings?.map(x => TableRow(x))}
                        
                </table>
                
                </div>
        )
    }
    

export {listOfUnconfirmed}
