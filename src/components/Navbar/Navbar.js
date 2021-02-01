import React from 'react';
import "./Navbar.css";
import { Button } from '@material-ui/core';

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar__brand">Brand</h1>

            <div className="navbar__linksBox">
                {/* I Want To Make Those Links Reponsive on iphone X ! */}
                <a className="navbar__link__underline"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Home
                </a>
                <a className="navbar__link__underline"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Services
                </a>
                <a className="navbar__link__underline"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Contact
                </a>
                <a className="navbar__link__underline"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer">
                    About
                </a>
                <Button variant="outlined" className="navbar__link__outline">Get Started</Button>
            </div>
        </nav>
    )
}
