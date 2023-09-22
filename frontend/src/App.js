import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('Ops');

useEffect(() => {
  fetch('http://localhost:3001/api/hello') // Adicione a porta 3001 aqui
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao buscar dados');
      }
      return response.json();
    })
    .then((data) => setMessage(data.message))
    .catch((error) => {
      console.error(error);
      // Trate o erro aqui (por exemplo, exiba uma mensagem de erro na interface do usuário)
    });
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
      </header>
    </div>
  );
}

export default App;
