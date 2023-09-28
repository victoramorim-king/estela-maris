import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import Header from '../Header';

test('Renders Header contaning main menu with all options', () => {
  render(<Header />);
  let optionsTitles = ['Home', 'Tarefas', 'Relatórios']

  optionsTitles.forEach(title =>{
    let element = screen.getByText(title) 
    expect(element).toBeInTheDocument();
  })
 
});
