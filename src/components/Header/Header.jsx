import React from 'react';
import ImageAi from '../../assets/head_ai.webp';
import ImageGroups from '../../assets/groups.png';
import "./header.scss";


const Header = () => {
    return ( <>
        <div className='header'>
            <div className='header__text'>

                <div className='header__title'>
                    <p className='header__title-text'>
                        Let’s Build Something amazing with GPT-3 OpenAI
                    </p>
                </div>
                <div className='header__body'>
                    <p className='header__body-text'>
                        The OpenAI API can be applied to virtually any task that involves understanding or generating natural language or code. Get to know latest updates by subscribing to newsletter.
                    </p>
                </div>
                <div className='header__input'>
                    <input className='header__input-field' type='text' placeholder='Your Email Address' />
                    <button className='header__input-btn'>Get Started</button>
                </div>
                <div className='header__groups'>
                    <img className='header__groups-img' src={ImageGroups} alt='groups' />
                    <p className='header__groups-text'>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>

            <div className='header__img'>
                <img loading='lazy' src={ImageAi} alt='ai' />
            </div>
        </div>
    </> );
}

export default Header;