import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Tracker from "./pages/Tracker";
import Unwind from "./pages/Unwind";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-[#2C2F3A] text-[#D7BDAE]">
        <NavBar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/tracker" element={<Tracker />} />
              <Route path="/unwind" element={<Unwind />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
