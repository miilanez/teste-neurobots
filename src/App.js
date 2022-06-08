import React from 'react';
import Header from "./components/Header";
import './App.css';
import Buscador from "./components/Buscador";
import Api from './components/Api';

function App() {
  return (
    <div className="principal">
      <Header />
      <Buscador />
    </div>
  );
}

export default App;
