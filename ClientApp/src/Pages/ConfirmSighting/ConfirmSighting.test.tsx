import React from 'react';
import { ConfirmSightingForm } from './ConfirmSighting';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { scotland } from '../GettingStarted/LocationData';

jest.mock("../../Api/apiClient", () => {
  return {
    getSighting: jest.fn().mockImplementation(() => {
      return Promise.resolve({
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
      });
    }),
  };
});

it('renders confirm sighting form successfully', async () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <ConfirmSightingForm />
    </MemoryRouter>, div);
  await new Promise(resolve => setTimeout(resolve, 1000));
});