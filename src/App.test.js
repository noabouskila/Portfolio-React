import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche le nom Noa', () => {
  render(<App />);
  const heading = screen.getByText(/noa/i);
  expect(heading).toBeInTheDocument();
});
