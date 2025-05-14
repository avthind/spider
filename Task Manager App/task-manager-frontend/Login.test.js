import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom';

test('renders login form', () => {
  render(<BrowserRouter><Login /></BrowserRouter>);
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
});

test('shows error on empty submit', async () => {
  render(<BrowserRouter><Login /></BrowserRouter>);
  fireEvent.click(screen.getByText('Login'));
  expect(await screen.findByText(/email/i)).toBeInTheDocument();
});
