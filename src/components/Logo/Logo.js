import React from 'react'

import logo from '../../assets/images/logo-my-shop-list.png'
import classes from './Logo.module.css'


const Logo = (props) => (
    <img className={classes.LogoImg} src={logo} alt="MyShopList"/>
);

export default Logo;