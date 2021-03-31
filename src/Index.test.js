import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react'; 
import AppRouter from './routers/AppRouters';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppRouter/>, div);
});

it('renders Login message', () => {
  render(<AppRouter/>);
  expect(screen.getByText('Log in')).toBeInTheDocument();
});

