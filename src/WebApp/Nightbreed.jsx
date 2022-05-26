import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Nightbreed = (props) => {
	return (
        <div>
            <h2>NIGHTBREED RADIO</h2>
            <nav>
                <Link to='/'>Home</Link> | {" "}
                <Link to='/shows'>Shows</Link> | {" "}
                <Link to='/djs'>Djs</Link> | {" "}
                <Link to='/schedule'>Shows</Link> | {" "}
                <Link to='/contact'>Djs</Link>
            </nav>
            <h2>{props.bodyContent}</h2>
        </div>
           )
};

export default Nightbreed;
