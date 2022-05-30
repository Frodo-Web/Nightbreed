import React, { useState } from 'react';
import Audio from './components/Audio';
import PlayingNow from './components/PlayingNow.jsx';
import './MusicApp.css';

const MusicApp = () => {

    const stream = 'http://199.101.51.168:8054/;stream.mp3';
    const lastSongsAPI = '/lastSongsPlayed';
    
    return (
        <div className="musicApp">
            <Audio stream={stream} />
            <PlayingNow lastSongsAPI={lastSongsAPI} />
        </div>
    )
}

export default MusicApp;