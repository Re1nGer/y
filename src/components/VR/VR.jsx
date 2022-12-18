import React from 'react';
import VrImage from '../../assets/feature.png';
import "./vr.scss";

const VR = () => {
    return ( <>
        <div className='vr' id='vr'>
            <div className='vr__img'>
                <img src={VrImage} alt={'VR image'} />
            </div>
            <div className='vr__description'>
                <h1 className='vr__title text-gradient'>The possibilities are beyond your imagination</h1>
                <p className='vr__content'>Our models can do everything from generating original stories to performing complex text analysis. Because they can do so many things, you have to be explicit in describing what you want. Showing, not just telling, is often the secret to a good prompt.</p>
                <h2 className='vr__sub-content'>Request Early Access to Get Started</h2>
            </div>
        </div>
    </> );
}

export default VR;