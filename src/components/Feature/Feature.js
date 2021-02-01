import React from 'react';
import "./Feature.css";
import { Button } from '@material-ui/core';

const Feature = () => {
    return (
        <div className="feature">
            <h1 className="feature__title">Primary <span className="feature__titleColor">Header</span></h1>
            <h2 className="feature__subtitle">Secondary Header</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nam excepturi optio repudiandae, porro perferendis saepe reiciendis deserunt,
                soluta asperiores veniam recusandae nobis pariatur nulla ratione neque voluptas autem earum maxime.
            </p>
            <Button className="feature__button">Learn More</Button>
        </div>
    )
}

export default Feature;