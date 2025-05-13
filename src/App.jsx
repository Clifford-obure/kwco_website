// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import AboutUs from "./pages/About/AboutUs";
import OurStory from "./pages/About/OurStory";
import MissionVision from "./pages/About/MissionVision";
import CoreValues from "./pages/About/CoreValues";
import PracticeAreas from "./pages/PracticeAreas/PracticeAreas";
import Litigation from "./pages/PracticeAreas/Litigation";
import CreditCollection from "./pages/PracticeAreas/CreditCollection";
import Conveyancing from "./pages/PracticeAreas/Conveyancing";
import DisputeResolution from "./pages/PracticeAreas/DisputeResolution";
import OurPeople from "./pages/OurPeople";
import ClientInsights from "./pages/ClientInsights";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="pt-20">
          {" "}
          {/* Add padding-top to account for fixed navigation */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/about/our-story" element={<OurStory />} />
            <Route path="/about/mission-vision" element={<MissionVision />} />
            <Route path="/about/core-values" element={<CoreValues />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/practice-areas/litigation" element={<Litigation />} />
            <Route
              path="/practice-areas/credit-collection"
              element={<CreditCollection />}
            />
            <Route
              path="/practice-areas/conveyancing"
              element={<Conveyancing />}
            />
            <Route
              path="/practice-areas/dispute-resolution"
              element={<DisputeResolution />}
            />
            <Route path="/our-people" element={<OurPeople />} />
            <Route path="/insights" element={<ClientInsights />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
