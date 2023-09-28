import React from 'react';

function Popup({ title, onClose, children }) {
  return (
    <div className='popup'>
      <div className='popup-content'>
        <h2>{title}</h2>
        {children}
        <button onClick={onClose} className="button">Fechar Pop-up</button>
      </div>
    </div>
  );
}

export default Popup;
