'use client'
import {ReactElement}from "react";
import Logo from "../Logo";
import NavigationBar from "../NavigationBar";
import SocialMedia from "../SocialMedia";
import './footer.scss'

const Footer = () :ReactElement => {
    return(
        <div className="footer">
            <div className="footer__container">
           <Logo />
           <h2>Portfolio</h2>
           <NavigationBar />
           <div>
           <SocialMedia />
           </div>
            </div>
           <hr />
           <p>© 2025 Portfolio by Souad. All right reserved</p>
        </div>
    )
}

export default Footer