import React from 'react';
import './AboutUsTop.css';

const AboutUsTop: React.FC = () => (
    <div className="image-stack-container">
        <img src={process.env.PUBLIC_URL +"/assets/icons/img.png"} alt="Back" className="image back" />
        <img src={process.env.PUBLIC_URL + "/assets/icons/img.png"} alt="Front" className="image front" />
    </div>
);

export default AboutUsTop;