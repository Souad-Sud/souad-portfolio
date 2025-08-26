'use client'
import {ReactElement}from "react";
import Logo from "../Logo";
import "./header.scss"
import NavigationBar from "../NavigationBar";

const Header = () :ReactElement => {
    return(
        <div className="header">
           <Logo />
           <NavigationBar />
        </div>
    )
}

export default Header;