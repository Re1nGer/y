import React from 'react';
import Google from '../../assets/google.png';
import Slack from '../../assets/slack.png';
import Shopify from '../../assets/shopify.png';
import Atlassian from '../../assets/atlassian.png';
import Dropbox from '../../assets/dropbox.png';

import "./brands.scss";

const Brands = () => {
    return (<>

        <div className='brands__container'>
            <div>
                <img src={Google} alt='google' />
            </div>
            <div>
                <img src={Slack} alt='slack' />
            </div>
            <div>
                <img src={Atlassian} alt='atlassian' />
            </div>
            <div>
                <img src={Dropbox} alt='dropbox' />
            </div>
            <div>
                <img src={Shopify} alt='shopify' />
            </div>
        </div>
    </>);
}

export default Brands;