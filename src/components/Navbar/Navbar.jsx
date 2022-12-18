import "./navbar.scss";
import Logo from '../../assets/logo.png';
import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

function Navbar() {

    const [toggleMenu, setToggleMenu] = React.useState(false);

    const handleToggleMenu = () => setToggleMenu(!toggleMenu);

    return ( <>
        <div className="navbar__container">
            <div className="navbar__logo">
                <img src={Logo} alt={'logo'} />
            </div>
            <div className="navbar__links">
                <a className="navbar__link navbar__link--home" href="#home">Home</a>
                <a className="navbar__link navbar__link--gpt" href="#gpt">What is GPT</a>
                <a className="navbar__link navbar__link--ai" href="#openAi">Open AI</a>
                <a className="navbar__link navbar__link--studies" href="#vr">Case Studies</a>
                <a className="navbar__link navbar__link--library" href="#caseStudies">Library</a>
            </div>
            <div className="navbar__sign">
                <p className="navbar__sign-link">Sign In</p>
                <button className="navbar__sign-btn">Sign Up</button>
            </div>
            <div className="navbar__menu-icon">
                {toggleMenu ? 
                    <RiCloseLine color="#fff" onClick={handleToggleMenu} size={27}/>
                    : <RiMenu3Line color="#fff" onClick={handleToggleMenu} size={27}/>
                }

                { toggleMenu && (
                <div className="navbar__menu-container scale-up-center">
                    <div className="navbar__menu-container_links">
                        <a className="navbar__link navbar__link--home" href="#home">Home</a>
                        <a className="navbar__link navbar__link--gpt" href="#gpt">What is GPT</a>
                        <a className="navbar__link navbar__link--ai" href="#openAi">Open AI</a>
                        <a className="navbar__link navbar__link--studies" href="#vr">Case Studies</a>
                        <a className="navbar__link navbar__link--library" href="#caseStudies">Library</a>
                    </div>
                    <div className="navbar__menu-sign">
                        <p className="navbar__menu-sign_link">Sign In</p>
                        <button className="navbar__menu-sign_btn">Sign Up</button>
                    </div>
                </div>
                )}
            </div>
        </div>
    </> );
}

export default Navbar;