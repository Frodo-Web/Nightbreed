import React from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Body from './components/Body';
import Footer from './components/Footer';

const Nightbreed = (props) => {
	return (
        <>
            <Header />
            <Jumbotron />
            {/*
            <Body bodyContent={props.bodyContent}/>
            */}
            <Footer />
        </>
           )
};

export default Nightbreed;
