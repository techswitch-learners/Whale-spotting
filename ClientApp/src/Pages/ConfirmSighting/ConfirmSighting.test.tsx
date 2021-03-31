import React from 'react';
import { ConfirmSightingForm } from './ConfirmSighting';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

it('renders confirm sighting form successfully', async () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <ConfirmSightingForm />
    </MemoryRouter>, div);
  await new Promise(resolve => setTimeout(resolve, 1000));
});