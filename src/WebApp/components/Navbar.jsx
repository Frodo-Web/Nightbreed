import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
        <div className='navbar'>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/shows'>Shows</NavLink>
                <NavLink to='/djs'>Djs</NavLink>
                <NavLink to='/schedule'>Schedule</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
        </div>
           )
};

export default Navbar;