import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import Menu from '../Menu';

test('Renders main menu with all options', () => {
  render(<Menu />);
  let optionsTitles = ['Home', 'Tarefas', 'Relatórios']
  optionsTitles.forEach(title =>{
    let element = screen.getByText(title) 
    expect(element).toBeInTheDocument();
  })
 
});
