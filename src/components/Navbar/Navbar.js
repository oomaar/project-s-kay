import React from 'react';
import "./Navbar.css";
import { Button } from '@material-ui/core';

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar__brand">Brand</h1>

            <div className="navbar__linksBox">
                <Button className="navbar__link">Sign up</Button>
                <Button variant="outlined" className="navbar__link__outline">Sign In</Button>
            </div>
        </nav>
    )
}
