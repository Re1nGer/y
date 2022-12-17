import React from 'react';
import Feature from '../Feature/Feature';
import "./gpt3.scss";

const WhatIsGpt3 = () => {
    return ( <>
        <div className='gpt3__whatgpt3'>
            <Feature heading={'What Is GPT-3'} content={'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'} />
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='text-gradient'>The possibilities are beyond your imagination</h1>
                <p className=''>Explore The Library</p>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature heading={'Chatbots'} content={'We so opinion friends me message as delight. Whole front do of plate heard oh ought.'} />
                <Feature heading={'Knowledgebase'} content={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'} />
                <Feature heading={'Education'} content={'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'}/>
            </div>
        </div>
    </> );
}

export default WhatIsGpt3;