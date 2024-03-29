import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { SiCredly } from "react-icons/si";
import Scrollspy from 'react-scrollspy'

import logoSymbolDark from '../../../public/assets/images/logo/blizttechLogo.png'

const SocialShare = [
    {Social: <SiCredly /> , link: 'https://www.credly.com/users/arnon-tawong/badges'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/in/bliztripper/'},
]
const HeaderThree = (props)=>{
    window.addEventListener('scroll', function() {
        var value = window.scrollY;
        if (value > 100) {
            document.querySelector('.header--fixed').classList.add('sticky')
        }else{
            document.querySelector('.header--fixed').classList.remove('sticky')
        }
    });

    var elements = document.querySelectorAll('.has-droupdown > a');
    for(var i in elements) {
        if(elements.hasOwnProperty(i)) {
            elements[i].onclick = function() {
                this.parentElement.querySelector('.submenu').classList.toggle("active");
                this.classList.toggle("open");
            }
        }
    }
    const { logo, color='default-color' } = props;
    let logoUrl;
    if(logo === 'light'){
        logoUrl = <img src="/assets/images/logo/logo-light.png" alt="Digital Agency" />;
    }else if(logo === 'dark'){
        logoUrl = <img src="/assets/images/logo/logo-dark.png" alt="Digital Agency" />;
    }else if(logo === 'symbol-dark'){
        logoUrl = <img src={logoSymbolDark} alt="BliztTech" style={{width:"100px", height:"auto"}}/>;
    }else if(logo === 'symbol-light'){
        logoUrl = <img src="/assets/images/logo/logo-symbol-light.png" alt="Digital Agency" />;
    }else{
        logoUrl = <img src="/assets/images/logo/logo.png" alt="Digital Agency" />;
    }

   const menuTrigger = () => {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    
    const CLoseMenuTrigger = ()=> {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }

        return(
            <header className={`header-area header-style-two header--fixed ${color}`}>
                <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">
                        <div className="logo">
                            <a href={props.homeLink}>
                                {logoUrl}
                            </a>
                        </div>
                        <nav className="mainmenunav d-lg-block ml--50">
                            <Scrollspy className="mainmenu" items={['home','about','service','portfolio','blog','contact']} currentClassName="is-current" offset={-200}>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#service">Service</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </Scrollspy>
                        </nav>
                    </div>
                    <div className="header-right">
                        <div className="social-share-inner">
                            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                        {/* Start Humberger Menu  */}
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={()=>menuTrigger()} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        {/* End Humberger Menu  */}
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={()=>CLoseMenuTrigger()} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        )
}
export default HeaderThree;