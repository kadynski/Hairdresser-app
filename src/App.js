import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tittle from "./components/Tittle";
import Main from "./pages/Main";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-up";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <Router>
      <Tittle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pages/Gallery" element={<Gallery />} />
      </Routes>
      <ScrollToTop showUnder={160}>
        <div className="scrollUp">
          <FontAwesomeIcon icon={faAngleDoubleUp} className="scrollIcon" />
        </div>
      </ScrollToTop>
      <Footer />
    </Router>
  );
};

export default App;
