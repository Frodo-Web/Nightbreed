import React from 'react';
import './Header.css';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
	return (
        <div className='header'>
            <Logo />
            <Navbar />
        </div>
           )
};

export default Header;