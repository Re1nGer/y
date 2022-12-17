import React from 'react';
import "./footer.scss";
import Logo from '../../assets/logo.png';

const Footer = () => {
    return ( <>
        <footer className='footer'>
            <div className='footer__title text-gradient'>
                <h1>Do you want to step in to the future before others</h1>
            </div>
            <div className='footer__btn'>
                <button>Request Early Access</button>
            </div>

            <div className='footer__columns'>
                <div className='footer__columns-trademark'>
                    <img src={Logo} alt={'logo'} />
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div className='footer__columns-links'>
                    <div className='footer__column'>
                        <h1>Links</h1>
                        <a>Overons</a>
                        <a>Social Media</a>
                        <a>Counters</a>
                        <a>Contact</a>
                    </div>
                    <div className='footer__column'>
                        <h1>Company</h1>
                        <a>Terms & Conditions</a>
                        <a>Privacy Policy</a>
                        <a>Contact</a>
                    </div>
                    <div className='footer__column'>
                        <h1>Get In Touch</h1>
                        <a>Crechterwoord K12 182 DK Alknjkcb</a>
                        <a>085-132567</a>
                        <a>info@payme.net</a>
                    </div>
                </div>
            </div>
        </footer>
    </> );
}

export default Footer;