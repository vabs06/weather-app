import React from 'react';

import logo from '../../assets/images/cloud.png';

import './Header.css';

const Header = () => (
    <div className='header'>
        <img
            src={logo}
            alt='logo'
        />
    </div>
);

export default Header;