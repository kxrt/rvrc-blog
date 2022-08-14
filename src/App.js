import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Abstracts from "./pages/Abstracts";
import KeynoteSpeaker from "./pages/KeynoteSpeaker";
import InteractiveSessions from "./pages/InteractiveSessions";
import AboutRVRC from "./pages/AboutRVRC";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="keynote" element={<KeynoteSpeaker />} />
          <Route path="interactive" element={<InteractiveSessions />} />
          <Route path="abstracts" element={<Abstracts />} />
          <Route path="about" element={<AboutRVRC />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
