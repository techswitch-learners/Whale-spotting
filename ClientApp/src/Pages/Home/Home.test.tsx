import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Home } from './Home';
import { fireEvent, render, screen,act } from '@testing-library/react';





jest.mock("../../Api/apiClient", () => {
  return {
    getRecentSightings: jest.fn().mockImplementation(() => {
      return Promise.resolve({recentSightingsList :[
        {
        "id": 107297,
        "apiId": null,
        "species": "Orca",
        "quantity": "18",
        "location": "Scotland",
        "latitude": 123,
        "longitude": -11,
        "description": "spotted 20 orca",
        "sightedAt": "2021-03-31T00:00:00",
        "submittedByName": "Roshni",
        "submittedByEmail": "r@r.com"
      },
      {
        "id": 107297,
        "apiId": null,
        "species": "Orce",
        "quantity": "18",
        "location": "Scotland",
        "latitude": 123,
        "longitude": -11,
        "description": "spotted 20 orca",
        "sightedAt": "2021-03-31T00:00:00",
        "submittedByName": "Roshni",
        "submittedByEmail": "r@r.com"
      },
      {
        "id": 107297,
        "apiId": null,
        "species": "Orce",
        "quantity": "18",
        "location": "Scotland",
        "latitude": 123,
        "longitude": -11,
        "description": "spotted 20 orca",
        "sightedAt": "2021-03-31T00:00:00",
        "submittedByName": "Roshni",
        "submittedByEmail": "r@r.com"
      },
      {
        "id": 107297,
        "apiId": null,
        "species": "Orce",
        "quantity": "18",
        "location": "Scotland",
        "latitude": 123,
        "longitude": -11,
        "description": "spotted 20 orca",
        "sightedAt": "2021-03-31T00:00:00",
        "submittedByName": "Roshni",
        "submittedByEmail": "r@r.com"
      },
      {
        "id": 107297,
        "apiId": null,
        "species": "Orce",
        "quantity": "18",
        "location": "Scotland",
        "latitude": 123,
        "longitude": -11,
        "description": "spotted 20 orca",
        "sightedAt": "2021-03-31T00:00:00",
        "submittedByName": "Roshni",
        "submittedByEmail": "r@r.com"
      }

     ]} );
    }),
  };
});

it('renders homeform successfully', async () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>, div);
  await new Promise(resolve => setTimeout(resolve, 1000));
});



