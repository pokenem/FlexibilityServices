import React from 'react';
import Team from '../components/about_us/Team';
import AutoSlider from '../components/about_us/AutoSlider';
import AboutUsTop from "../components/about_us/AboutUsTop";

const AboutUs: React.FC = () => (
    <div className="about-container">
        <AboutUsTop/>
        <Team />
        <AutoSlider />
    </div>
);

export default AboutUs;
