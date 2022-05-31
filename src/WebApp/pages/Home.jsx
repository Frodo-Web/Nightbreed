import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div id="box1">
                <h2>WELCOME TO NIGHTBREED RADIO...</h2>
                <p>{"Originating from the world-renowned UK Goth label Nightbreed Recordings, \
             Nightbreed Radio plays the widest range of dark alternative music in the world 24 hours a day, \
              7 days a week, on demand! Our mission is to bring you the widest selection of 80's & 90's dark classics, \
               as well as the underground releases of today from the Goth, Darkwave, Deathrock, Industrial and Dark Alternative genres."}</p>
            </div>
            <div id="box2">
                <h2>HOW TO LISTEN IN</h2>
                <h3>USE AUDIO PLAYER:</h3>
                <p>Hit the play button on audio player (please disable HTTPS-only mode for this website in your browser).</p>
                <h3>INTERNET-ENABLED DEVICES:</h3>
                <p>Use this URL to stream us directly through a browser- <a href="http://199.101.51.168:8054/;stream.mp3">http://199.101.51.168:8054/;stream.mp3</a></p>
            </div>
            <div id="box3">
                <h2>WE'RE ON MIXCLOUD</h2>
                <h3>NEVER MISS A SHOW-EVER</h3>
                <p>Stuck in traffic? The In-Laws paying an unexpected visit?
                    House on fire? No worries.
                    You can visit our Mixcloud page and browse through our monthly updated playlists <a href="https://www.mixcloud.com/NightbreedRadio/">RIGHT HERE</a>.
                    Use the Free Mixcloud <a href="https://www.mixcloud.com/mobile/">iPhone {'&'} Android apps</a> as well as their mobile site to catch our shows on demand!</p>
            </div>
            <div id="box4">
                <h2>DEMOS {'&'} PROMOS</h2>
                <p>Please send demo/promo tracks to us via email at <a href="mailto:nightbreeddemos@gmail.com">nightbreeddemos@gmail.com</a></p>
            </div>
        </div>
    )
}

export default Home;