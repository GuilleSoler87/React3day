import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Carta from './components/Carta/Carta';
import Reservas from './components/Reservas/Reservas';

const dishes = [
  {
    id: 1,
    name: 'Arroz a la cubana',
    description: 'Un arroz simple pero increible ',
    price: 10,
  },
  {
    id: 2,
    name: 'Hamburguesa',
    description: 'Hamburguesa Gourmet con pan negro',
    price: 20
  },
  {
    id: 3,
    name: 'Pizza ',
    description: 'La mejor Pizza de tu vida',
    price: 15
  }
];

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Carta" element={<Carta dishes={dishes} />} />
        <Route path="/Reservas" element={<Reservas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 

