import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Tittle from "./components/Tittle";
import Main from "./pages/Main";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";

const App =()=> {
    return (
        <Router>
            <Tittle />
            <Routes>
            <Route  path='/Main' element={<Main />} />
            <Route  path='/' element={<Main />} />
            <Route path='/Gallery' element={<Gallery/>} />
            </Routes>
            <Footer />
        </Router>
    )
};

export default App;