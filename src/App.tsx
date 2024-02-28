import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ClicksPerSecond from "./components/ClicksPerSecond";
import Quests from "./components/Quests";
import ShootTest from "./components/ShootTest";
import ReCenter from "./components/ReCenter";
import HoldBall from "./components/HoldBall";
import HorizontalHold from "./components/HorizontalHold";
import VerticalHold from "./components/VerticalHold";
import Test from "./components/Test";
import ReactionTimeTest from "./components/ReactionTimeTest";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/clickspersecond" element={<ClicksPerSecond />} />
        <Route path="/shoottest" element={<ShootTest />} />
        <Route path="/recenter" element={<ReCenter />} />
        <Route path="/holdball" element={<HoldBall />} />
        <Route path="/horizontaltest" element={<HorizontalHold />} />
        <Route path="/verticaltest" element={<VerticalHold />} />
        <Route path="/reactiontest" element={<ReactionTimeTest />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Quests />
      <Footer />
    </div>
  );
}

export default App;
