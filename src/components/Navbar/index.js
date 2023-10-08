import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import { Link } from 'react-router-dom';
//import { Button } from '../ButtonElement';
import {Nav,NavbarContainer,NavLogo,NavItem,NavMenu,NavLinks,NavBtn,NavBtnLink} from './NavElements';
const Navbar = ({toggle,isOpen}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>InclusiveMinds</NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/about' onClick={toggle}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/discover' onClick={toggle}>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/services' onClick={toggle}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/help' onClick={toggle}>Help</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;
