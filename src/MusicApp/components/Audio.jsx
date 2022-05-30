import React from 'react';

const Audio = (props) => {
    
    return (
            <audio src={props.stream} controls autoPlay></audio>
           )
}

export default Audio;