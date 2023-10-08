//import React from 'react';
import styled from 'styled-components';
import {Link }  from 'react-router-dom';



export const Nav = styled.nav`
    background:#000;
    height: 80px;
    margin-top: -80px;
    display:flex;
    justify-content: center;
    position:sticky;
    font-size: 1 rem;
    top: 0;
    z-index:10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height:80px;
    z-index: -1;
    width:100%;
    padding: 0 24px;
    max-width: 1100px;

`
export const NavLogo = styled(Link)`
    color:White;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display:flex;
    align-items:center;
    margin-left:24px;
    font-weight:bold;
    text-decoration: none;

`


export const NavMenu= styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    text-align:center;
    margin-right: 2 2px;

    @media screen and (max-width: 768px){
        display:none;
    }

`
export const NavItem=styled.li`

    height:80px;
   
`
export const NavLinks =styled(Link)`
    color:#fff;
    display:flex;
    align-items:center;
    text-decoration: none;
    padding: 0 1rem;
    height:100%;
    cursor:pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
    }
    &:hover{
        transition:all 0.2s ease-in-out;
        color:#1B9AAA;

    }

`

export const NavBtn=styled.nav`
    display:flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display:none;
    }
`

export const NavBtnLink=styled(Link)`
    border-radius:50px;
    background: #1B9AAA;
    white-space:nowrap;
    padding:10px 22px;
    color:white;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition:all 0.2s ease-in-out;
        background:#fff;
        color:#010606;
    }
`
export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

export const DropdownItem = styled(Link)`
  padding: 12px 16px;
  text-decoration: none;
  color: #000;
  &:hover {
    background-color: #f1f1f1;
  }
`;


