import React from 'react';
import { Feature, Navbar } from '..';
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
                <Navbar />
                <Feature />
        </header>
    )
}

export default Header;
