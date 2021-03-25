import React from 'react';
import { SubmitSightingForm } from './SubmitSighting';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

it('renders form without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <SubmitSightingForm />
    </MemoryRouter>, div);
  await new Promise(resolve => setTimeout(resolve, 1000));
});