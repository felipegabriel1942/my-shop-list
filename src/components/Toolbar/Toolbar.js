import React from 'react'
import {Navbar, NavbarBrand} from 'reactstrap';
import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo';


const Toolbar = (props) => (

        <Navbar 
            color="success" 
            expand="light"
            sticky="top" 
            className={ [classes.Logo, classes.Toolbar].join(' ')}>
            <NavbarBrand><Logo />MyShopList</NavbarBrand>
        </Navbar>

);

export default Toolbar;