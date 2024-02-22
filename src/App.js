import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import AboutRVRC from "./pages/AboutRVRC";

import Header2024 from "./components/2024/Header";
import Landing2024 from "./pages/2024/Landing";
import KeynoteSpeaker2024 from "./pages/2024/KeynoteSpeaker";
import GuestOfHonour2024 from "./pages/2024/GuestOfHonour";
import ThematicThreads2024 from "./pages/2024/ThematicThreads";

import Header2022 from "./components/2022/Header";
import Landing2022 from "./pages/2022/Landing";
import KeynoteSpeaker2022 from "./pages/2022/KeynoteSpeaker";
import InteractiveSessions2022 from "./pages/2022/InteractiveSessions";
import Abstracts2022 from "./pages/2022/Abstracts";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="about" element={<AboutRVRC />} />

          <Route path="/" element={<Header2024 />}>
            <Route index element={<Landing2024 />} />
            <Route path="keynote" element={<KeynoteSpeaker2024 />} />
            <Route path="guest-of-honour" element={<GuestOfHonour2024 />} />
            <Route path="thematic-threads" element={<ThematicThreads2024 />} />
          </Route>

          <Route path="2022" element={<Header2022 />}>
            <Route index element={<Landing2022 />} />
            <Route path="keynote" element={<KeynoteSpeaker2022 />} />
            <Route path="interactive" element={<InteractiveSessions2022 />} />
            <Route path="abstracts" element={<Abstracts2022 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
