import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 

import List from '../List';


  const links = [
    { text: "Adonai", href: "/#" },
    { text: "Auto Escola", href: "/#" },
    { text: "Beauty Palace", href: "/#" },
    { text: "Buteco do Ceian", href: "/#" },
    { text: "Buteco do Loro", href: "/#" },
    { text: "Carol Frazão Confeitaria", href: "/#" },
    { text: "Estela Maris", href: "/#" },
    { text: "J & J Ferragens", href: "/#" },
    { text: "Polpa me Polpa", href: "/#" },
    { text: "Quintal Nordestino", href: "/#" },
    { text: "São Patricio", href: "/#" },
    { text: "Tempero de Sogra", href: "/#" },
    { text: "The Buurguer", href: "/#" },
  ];

test('renders List with the correct options', () => {
  render(<List links={links}/>);

  links.forEach(link =>{
    let element = screen.getByText(link.text) 
    expect(element).toBeInTheDocument();
  })
});
