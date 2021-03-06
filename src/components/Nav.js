import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = () => {
    return ( 
        <NavStyle>
            <h1>
                <NavLink to='/' id='logo'>Capture</NavLink>
            </h1>
            <ul>
                <li>
                    <NavLink
                        exact 
                        to='/'
                        activeClassName='selectedLink'
                        >1. About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact 
                        to='/work'
                        activeClassName='selectedLink'
                        >2. Our Work
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to='/contact'
                        activeClassName='selectedLink'
                        >3. Contact Us
                    </NavLink>
                </li>
            </ul>
        </NavStyle>
     );
};

const NavStyle = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
    .selectedLink {
        border-bottom: 2px double #23d997;
    }
    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 1rem;
        #logo {
            display: inline-block;
            margin: 1rem;
        }  
        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
            li {
                padding: 0;
            }
        }      
    }
`;
 
export default Nav;