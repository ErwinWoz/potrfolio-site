import React from 'react';
import styled from 'styled-components';
import home1 from '../img/home1.png';

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
const AboutStyle = styled.div `
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

const DescriptionStyle = styled.div `
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`;

const ImageStyle = styled.div `
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const HideStyle = styled.div `
    overflow: hidden;
`;
 
export default AboutSection;