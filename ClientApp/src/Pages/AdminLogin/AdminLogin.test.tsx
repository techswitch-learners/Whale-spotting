import React from 'react';
import { render } from '@testing-library/react';
import { AdminLogin } from './AdminLogin';
import { BrowserRouter } from 'react-router-dom';

test('renders the AdminLogin page component without errors', () => {
  render(
    <BrowserRouter>
      <AdminLogin />
    </BrowserRouter>
  );
});