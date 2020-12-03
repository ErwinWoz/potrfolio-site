import React from 'react';
import styled from 'styled-components';
import home1 from '../img/home1.png';
import { AboutStyle, DescriptionStyle, ImageStyle, HideStyle } from '../styles';

const AboutSection = () => {
    return ( 
        <AboutStyle>
            <DescriptionStyle>
                <div className="title">
                    <HideStyle>
                        <h2>We work to make</h2>
                    </HideStyle>
                    <HideStyle>
                        <h2>your <span>dream</span> come</h2>
                    </HideStyle>
                    <HideStyle>
                        <h2>true</h2>
                    </HideStyle>
                </div>
                <p>Contact us for any photography and video editig. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </DescriptionStyle>
            <ImageStyle>
                <img src={home1} alt="guy with camera" />
            </ImageStyle>
        </AboutStyle>
    );
};

//Styled Components

 
export default AboutSection;