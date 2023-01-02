import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';

export default function MainRouter() {
    return (
        
        <Routes>
            <Route path='/about' element={<About />} />
            <Route path="/" element={<Home />} />
        </Routes>
        
    
  )
}
