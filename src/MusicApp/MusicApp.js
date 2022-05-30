import React from 'react';
import Audio from './components/Audio';
import PlayingNow from './components/PlayingNow.jsx';
import './MusicApp.css';

const MusicApp = () => {

    const stream = 'http://199.101.51.168:8054/;stream.mp3';
    const currentsong = 'http://199.101.51.168:8054/currentsong?sid=1';
    
    return (
        <div className="musicApp">
            <Audio stream={stream} />
           {/* <PlayingNow currentsong={currentsong} /> */}
        </div>
    )
}

export default MusicApp;