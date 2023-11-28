import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './component/LandingPage/LandingPage';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Detail from './component/Detail/Detail';
import Footer from './component/Footer/Footer';
import About from './component/About/About';
import LogoutButton from './component/Login/LogoutButton';
import './App.css';



export default function App() {
  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/about" element={<About />} />
          <Route path="/loggedout" element={<LogoutButton />} />
        </Routes>
        
      </div>
      </Router>
    
  );
}