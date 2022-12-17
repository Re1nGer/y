import React from 'react';
import VrImage from '../../assets/feature.png';
import "./vr.scss";

const VR = () => {
    return ( <>
        <div className='vr'>
            <div className='vr__img'>
                <img src={VrImage} alt={'VR image'} />
            </div>
            <div className='vr__description'>
                <h2 className='vr__subtitle'>Request Early Access to Get Started</h2>
                <h1 className='vr__title text-gradient'>The possibilities are beyond your imagination</h1>
                <p className='vr__content'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <h2 className='vr__sub-content'>Request Early Access to Get Started</h2>
            </div>
        </div>
    </> );
}

export default VR;