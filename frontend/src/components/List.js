import React from 'react';

function List({ links, onClickLink }) {

  return (
    <div className='list-container'>
      <ul>
        {links.map((link, index) => (
          <li className='list-item' key={index}>
            <a onClick={() => onClickLink(link.text)} href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
