import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/tasks">Tarefas</a></li>
          <li><a href="/reports">Relatórios</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
