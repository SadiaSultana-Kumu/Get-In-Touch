import React from 'react';
import logo from '../../images/banner.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/home">Home</a>
                <a href="/profile">Profile</a>
                <a href="/connection">Connection</a>
            </nav>
        </div>
    );
};

export default Header;