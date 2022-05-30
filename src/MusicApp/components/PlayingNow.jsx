import React, { useRef } from 'react';

const PlayingNow = (props) => { 

    const iframeRef = useRef(null);

    const handleIframe = () => {
        console.log(iframeRef.current.contentWindow.document);
    }

    return (
    <iframe ref={iframeRef} src={props.currentsong} title="Playing now" onLoad={handleIframe}></iframe>
            )
}

export default PlayingNow;