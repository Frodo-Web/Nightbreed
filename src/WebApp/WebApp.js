import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nightbreed from './Nightbreed';

const WebApp = () => {
    const content = {
        home: 'WELCOME TO NIGHTBREED RADIO...',
        shows: 'THE NIGHTBREED RADIO SHOWS ',
        djs: 'THE NIGHTBREED RADIO DEEJAYS',
        schedule: 'THE NIGHTBREED RADIO SCHEDULE',
        contact: 'CONTACT US',
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Nightbreed bodyContent={content.home} />} />
                <Route path='shows' element={<Nightbreed bodyContent={content.shows} />} />
                <Route path='djs' element={<Nightbreed bodyContent={content.djs} />} />
                <Route path='schedule' element={<Nightbreed bodyContent={content.schedule} />} />
                <Route path='contact' element={<Nightbreed bodyContent={content.contact} />} />
            </Routes>
        </BrowserRouter>
    )

}

export default WebApp;