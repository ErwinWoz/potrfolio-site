import React from 'react';
//Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';

const ContactUs = () => {
    return ( 
        <ContactStyle 
            variants={pageAnimation}
            initial='hidden' 
            animate='show' 
            exit='exit' 
            style={{backgroundColor: 'white'}}
        >
            <TitleStyle>
                <Hide>
                    <motion.h2
                        variants={titleAnim}
                    >
                        Get in touch.
                    </motion.h2>
                </Hide>
            </TitleStyle>
            <div>
                <Hide>
                    <SocialStyle variants={titleAnim} >
                        <Circle />
                        <h2>Send Us a Mesage</h2>
                    </SocialStyle>
                </Hide>
                <Hide>
                    <SocialStyle variants={titleAnim} >
                        <Circle />
                        <h2>Send an Email</h2>
                    </SocialStyle>
                </Hide>
                <Hide>
                    <SocialStyle variants={titleAnim} >
                        <Circle />
                        <h2>Social Media</h2>
                    </SocialStyle>
                </Hide>                
            </div>
        </ContactStyle>
     );
};

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
`;

const TitleStyle = styled.div`
    margin-bottom: 4rem;
    color: black;
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: #353535;
`;

const SocialStyle = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }
`;
 
export default ContactUs;