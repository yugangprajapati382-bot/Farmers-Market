import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Price from './Price';
import Product from './Product';
import Sidebar from './Bar';

function App() {
  return (
    <BrowserRouter>

      <Sidebar/>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/price" element={<Price/>} />
        <Route path="/product" element={<Product/>} />
       

      </Routes>
    </BrowserRouter>
  );
}

export default App;
