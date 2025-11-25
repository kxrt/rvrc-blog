import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import AboutRVRC from "./pages/AboutRVRC";
import Header from "./components/header/Header";

import Landing2022 from "./pages/2022/Landing";
import KeynoteSpeaker2022 from "./pages/2022/KeynoteSpeaker";
import InteractiveSessions2022 from "./pages/2022/InteractiveSessions";
import Abstracts2022 from "./pages/2022/Abstracts";
import headerLinks2022 from "./constants/2022/HeaderLinks";

import Landing2024 from "./pages/2024/Landing";
import KeynoteSpeaker2024 from "./pages/2024/KeynoteSpeaker";
import GuestOfHonour2024 from "./pages/2024/GuestOfHonour";
import ThematicThreads2024 from "./pages/2024/ThematicThreads";
import Awards2024 from "./pages/2024/Awards";
import headerLinks2024 from "./constants/2024/HeaderLinks";

import Landing2025 from "./pages/2025/Landing";
import Team2025 from "./pages/2025/Team";
import KeynoteSpeaker2025 from "./pages/2025/KeynoteSpeaker";
import Thread12025 from "./pages/2025/Thread1";
import Thread22025 from "./pages/2025/Thread2";
import PosterGallery2025 from "./pages/2025/PosterGallery";
import headerLinks2025 from "./constants/2025/HeaderLinks";

import Landing2026 from "./pages/2026/Landing";
import Team2026 from "./pages/2026/Team";
import KeynoteSpeaker2026 from "./pages/2026/KeynoteSpeaker";
import Thread12026 from "./pages/2026/Thread1";
import Thread22026 from "./pages/2026/Thread2";
import PosterGallery2026 from "./pages/2026/PosterGallery";
import headerLinks2026 from "./constants/2026/HeaderLinks";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Jost",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="about" element={<AboutRVRC />} />

            <Route path="/" element={<Header headerLinks={headerLinks2026} />}>
              <Route index element={<Landing2026 />} />
              <Route path="team" element={<Team2026 />} />
              <Route path="keynote" element={<KeynoteSpeaker2026 />} />
              <Route path="thread-1" element={<Thread12026 />} />
              <Route path="thread-2" element={<Thread22026 />} />
              <Route path="poster-gallery" element={<PosterGallery2026 />} />
            </Route>

            <Route path="2025" element={<Header headerLinks={headerLinks2025} />}>
              <Route index element={<Landing2025 />} />
              <Route path="team" element={<Team2025 />} />
              <Route path="keynote" element={<KeynoteSpeaker2025 />} />
              <Route path="thread-1" element={<Thread12025 />} />
              <Route path="thread-2" element={<Thread22025 />} />
              <Route path="poster-gallery" element={<PosterGallery2025 />} />
            </Route>

            <Route
              path="2024"
              element={<Header headerLinks={headerLinks2024} />}
            >
              <Route index element={<Landing2024 />} />
              <Route path="keynote" element={<KeynoteSpeaker2024 />} />
              <Route path="guest-of-honour" element={<GuestOfHonour2024 />} />
              <Route
                path="thematic-threads"
                element={<ThematicThreads2024 />}
              />
              <Route path="awards" element={<Awards2024 />} />
            </Route>

            <Route
              path="2022"
              element={<Header headerLinks={headerLinks2022} />}
            >
              <Route index element={<Landing2022 />} />
              <Route path="keynote" element={<KeynoteSpeaker2022 />} />
              <Route path="interactive" element={<InteractiveSessions2022 />} />
              <Route path="abstracts" element={<Abstracts2022 />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
