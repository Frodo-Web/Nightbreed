import React from 'react';
import './Body.css';

const Body = (props) => {
	return (
        <div className='body'>
            {props.bodyContent}
        </div>
           )
};

export default Body;