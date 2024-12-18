import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Batch from "./components/batch/batch";
import CommunityAndLearning from "./components/community-learning/community-learning";
import PrivacyPolicy from "./components/policy/PrivacyPolicy";
import TermsAndConditions from "./components/policy/TermsAndConditions";
import TopStrip from "./components/topstrip/TopStrip";
import FAQ from "./components/faq/faq";
import Refund from "./components/policy/Refund";

function App() {
  return (
    <Router>
      <div className="app">
        <TopStrip />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Batch />
                <CommunityAndLearning />
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<Refund />} />
        </Routes>
        <FAQ />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
