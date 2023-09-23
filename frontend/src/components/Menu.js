import React from 'react';

function Menu() {
  return (
      <nav className='main-menu'>
        <ul>
          <li><a className='nav-link' href="/">Home</a></li>
          <li><a className='nav-link' href="/tasks">Tarefas</a></li>
          <li><a className='nav-link' href="/reports">Relatórios</a></li>
        </ul>
      </nav>
  );
}

export default Menu;
