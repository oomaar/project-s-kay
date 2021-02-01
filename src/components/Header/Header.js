import React from 'react';
import { Navbar } from '..';
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <h1>I'm The Header</h1>
        </header>
    )
}

export default Header;
