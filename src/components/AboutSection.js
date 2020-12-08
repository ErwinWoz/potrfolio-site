import React from 'react';
import home1 from '../img/home1.png';
import { AboutStyle, DescriptionStyle, ImageStyle, HideStyle } from '../styles';
//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const AboutSection = () => {
    return ( 
        <AboutStyle>
            <DescriptionStyle>
                <div className="title">
                    <HideStyle>
                        <motion.h2 variants={titleAnim} >We work to make</motion.h2>
                    </HideStyle>
                    <HideStyle>
                        <motion.h2 variants={titleAnim}>your <span>dream</span> come</motion.h2>
                    </HideStyle>
                    <HideStyle>
                        <motion.h2 variants={titleAnim}>true</motion.h2>
                    </HideStyle>
                </div>
                <motion.p variants={fade} >Contact us for any photography and video editig. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade} >Contact Us</motion.button>
            </DescriptionStyle>
            <ImageStyle>
                <motion.img variants={photoAnim} src={home1} alt="guy with camera" />
            </ImageStyle>
            <Wave />
        </AboutStyle>
    );
};

//Styled Components

 
export default AboutSection;