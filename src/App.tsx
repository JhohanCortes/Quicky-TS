import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Bitacora from './components/Bitacota';
import Features from './components/Features';

function App() {
  return (
    <div>
      <Header />

    <Routes>
      <Route path="/bitacora" element={<Bitacora />} />
      <Route path="" element={<Home/>}/>
      <Route path="features" element={<Features/>}/>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
