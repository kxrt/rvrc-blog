import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import AboutRVRC from "./pages/AboutRVRC";
import Header from "./components/Header";
import {
  headerLinks2022,
  headerLinks2024,
  headerLinks2025,
} from "./constants/HeaderLinks";

import Landing2022 from "./pages/2022/Landing";
import KeynoteSpeaker2022 from "./pages/2022/KeynoteSpeaker";
import InteractiveSessions2022 from "./pages/2022/InteractiveSessions";
import Abstracts2022 from "./pages/2022/Abstracts";

import Landing2024 from "./pages/2024/Landing";
import KeynoteSpeaker2024 from "./pages/2024/KeynoteSpeaker";
import GuestOfHonour2024 from "./pages/2024/GuestOfHonour";
import ThematicThreads2024 from "./pages/2024/ThematicThreads";
import Awards2024 from "./pages/2024/Awards";

import Landing2025 from "./pages/2025/Landing";
import Thread12025 from "./pages/2025/Thread1";
import Thread22025 from "./pages/2025/Thread2";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="about" element={<AboutRVRC />} />

          <Route path="/" element={<Header headerLinks={headerLinks2025} />}>
            <Route index element={<Landing2025 />} />
            {/* <Route path="keynote" element={<KeynoteSpeaker2025 />} /> */}
            <Route path="thread-1" element={<Thread12025 />} />
            <Route path="thread-2" element={<Thread22025 />} />
            {/* <Route path="awards" element={<Awards2025 />} /> */}
          </Route>

          <Route path="2024" element={<Header headerLinks={headerLinks2024} />}>
            <Route index element={<Landing2024 />} />
            <Route path="keynote" element={<KeynoteSpeaker2024 />} />
            <Route path="guest-of-honour" element={<GuestOfHonour2024 />} />
            <Route path="thematic-threads" element={<ThematicThreads2024 />} />
            <Route path="awards" element={<Awards2024 />} />
          </Route>

          <Route path="2022" element={<Header headerLinks={headerLinks2022} />}>
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
