import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ClicksPerSecond from './components/ClicksPerSecond';
import Quests from './components/Quests';
import ShootTest from './components/ShootTest';

function App() {
  return (
    <div>
      <Header />

    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="/clickspersecond" element={<ClicksPerSecond/>}/>
      <Route path="/shoottest" element={<ShootTest/>}/>
    </Routes>
    <Quests/>
    <Footer />
    </div>
  );
}

export default App;
