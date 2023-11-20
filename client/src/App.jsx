import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './component/LandingPage/LandingPage';
import Home from './component/Home/Home';
import Detail from './component/Detail/Detail';
import Footer from './component/Footer/Footer';
import About from './component/About/About';

export default function App() {
  return (
   
      <div className="App">
      
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/about" element={<About />} />
         
        </Routes>
      </div>
    
  );
}