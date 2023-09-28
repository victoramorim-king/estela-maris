import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import Popup from '../Popup';
const popupMenuOptions = [
  { title: "Dados da empresa", href: "/#" },
  { title: "Funcionários", href: "/#" },
  { title: "Relatórios", href: "/#" },
  { title: "Tarefas", href: "/#" },
  { title: "Financeiro", href: "/#" },
];

let popupTitle = "Test"


test('renders Popup with the correct options', () => {
  render(<Popup title={popupTitle} onClose={() => togglePopup('')}>
    <div className='list-container'>
      <ul>
        {popupMenuOptions.map((option, index) => (
          <li className='list-item' key={index}>
            <a href={option.href}>{option.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </Popup>
  );

  popupMenuOptions.forEach(option =>{
    let element = screen.getByText(option.title) 
    expect(element).toBeInTheDocument();
  })
});
