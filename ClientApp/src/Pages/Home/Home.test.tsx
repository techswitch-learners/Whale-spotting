import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Home } from './Home';
import { fireEvent, render, screen,act } from '@testing-library/react';



test('renders the Home component without errors', () => {
  render(<Home />)
});



