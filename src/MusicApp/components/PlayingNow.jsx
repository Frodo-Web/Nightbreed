import React, { useState, useEffect } from 'react';

const PlayingNow = (props) => { 

    const [lastSongs, setLastSongs] = useState({});

    useEffect(() => {
        if (!Object.keys(lastSongs).length) getLastSongs();
        const songsListInterval = setInterval(() => getLastSongs(), 10000);
    }, [])

    const getLastSongs = () => {
        fetch(props.lastSongsAPI)
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            setLastSongs(json);
          });
      };

    const createList = () => {
        let list = [];
        if (Object.keys(lastSongs).length) {
            Object.entries(lastSongs).forEach(([key, val]) => {
                list.push(<div className='songElement'>
                    <img src="images/song logo.jpg" alt="Nightbreed song logo"></img>
                    <div className='songData'>
                        <div>{val.playedAt} {(key === '0') ? <span> Playing Now</span> : <></>}</div> 
                        <div>{val.songTitle}</div>
                    </div>
                </div>);
            });
        }
        return list;
    }

    return (
        <>
            <div className='songsHistory'>
                {lastSongs && createList()}
            </div>
        </>
            )
}

export default PlayingNow;