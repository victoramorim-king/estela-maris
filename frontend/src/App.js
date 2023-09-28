import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/main.scss';

function App() {
  const [message, setMessage] = useState('Ops');

  useEffect(() => {
    fetch('http://localhost:3001/api/hello') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        return response.json();
      })
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error(error);
        setMessage(error)
        
      });
  }, []);


  return (
    <div className="App">
      <Header />
      <main className='page-container'>
        <Home />
      </main>
      <Footer />
    </div>
  );

}

export default App;
