import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ClicksPerSecond from './components/ClicksPerSecond';
import Quests from './components/Quests';
import ShootTest from './components/ShootTest';
import ReCenter from './components/ReCenter';
import VanillaTest from './components/VanillaTest';
import HoldBall from './components/HoldBall';
import HoldingBall from './components/HoldingBall';

function App() {
  return (
    <div>
      <Header />

    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="/clickspersecond" element={<ClicksPerSecond/>}/>
      <Route path="/shoottest" element={<ShootTest/>}/>
      <Route path="/recenter" element={<ReCenter/>}/>
      <Route path="/vanilla" element={<VanillaTest/>}/>
      <Route path="/holdball" element={<HoldBall/>}/>
      <Route path="/holdingball" element={<HoldingBall/>}/>
    </Routes>
    <Quests/>
    <Footer />
    </div>
  );
}

export default App;
