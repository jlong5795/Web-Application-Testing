import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

test('renders main app', () => {
  rtl.render(<App />);
 
});

test('checks if display has rendered', () => {
  rtl.render(<Display />);
});

test('checks if dashboard has rendered', () => {
  rtl.render(<Dashboard />);
});


