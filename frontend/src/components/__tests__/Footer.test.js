import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import Footer from '../Footer';

test('renders footer with the correct text', () => {
  render(<Footer />);
  const element = screen.getByText('© 2023 Estela Maris. Todos os direitos reservados.');
  expect(element).toBeInTheDocument();
});
