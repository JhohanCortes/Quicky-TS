import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ClicksPerSecond from './components/ClicksPerSecond';
import Quests from './components/Quests';

function App() {
  return (
    <div>
      <Header />

    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="/clickspersecond" element={<ClicksPerSecond/>}/>
    </Routes>
    <Quests/>
    <Footer />
    </div>
  );
}

export default App;
