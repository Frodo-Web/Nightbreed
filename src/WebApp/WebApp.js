import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nightbreed from './Nightbreed';
import Home from './pages/Home';
import Shows from './pages/Shows';
import Djs from './pages/Djs';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';

const WebApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Nightbreed bodyContent={<Home />} />} />
                <Route path='shows' element={<Nightbreed bodyContent={<Shows />} />} />
                <Route path='djs' element={<Nightbreed bodyContent={<Djs />} />} />
                <Route path='schedule' element={<Nightbreed bodyContent={<Schedule />} />} />
                <Route path='contact' element={<Nightbreed bodyContent={<Contact />} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default WebApp;