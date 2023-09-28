import List from '../components/List'
import Popup from '../components/Popup';
import React, { useState } from 'react';

function Home() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');

  const togglePopup = (title) => {
    setPopupTitle(title);
    setPopupOpen(!isPopupOpen);
  };

  const menuOptions = [
    { title: "Dados da empresa", href: "/#" },
    { title: "Funcionários", href: "/#" },
    { title: "Relatórios", href: "/#" },
    { title: "Tarefas", href: "/#" },
    { title: "Financeiro", href: "/#" },
  ];
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

  return (
    <div>
      {isPopupOpen && (
        <Popup title={popupTitle} onClose={() => togglePopup('')}>
          <div className='list-container'>
            <ul>
              {menuOptions.map((option, index) => (
                <li className='list-item' key={index}>
                  <a href={option.href}>{option.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </Popup>
      )}
      <List links={links} onClickLink={togglePopup} />
    </div>
  );
}

export default Home;
