import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Header />

    <Routes>
      <Route path="" element={<Home/>}/>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
