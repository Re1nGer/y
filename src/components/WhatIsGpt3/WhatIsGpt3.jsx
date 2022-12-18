import React from 'react';
import Feature from '../Feature/Feature';
import "./gpt3.scss";

const WhatIsGpt3 = () => {
    return ( <>
        <div className='gpt3__whatgpt3' id='gpt'>
            <Feature heading={'What Is GPT-3'}
                content={'Generative Pre-trained Transformer 3 (GPT-3; stylized GPT·3) is an autoregressive language model that uses deep learning to produce human-like text. Given an initial text as prompt, it will produce text that continues the prompt.'}
            />
            <div className='gpt3__whatgpt3-heading'>
                <h1 className='text-gradient'>The possibilities are beyond your imagination</h1>
                <a href='https://openai.com/blog/chatgpt/' className='gpt3__whatgpt3-link'>Explore The Library</a>
            </div>
            <div className='gpt3__whatgpt3-container'>
                <Feature heading={'Chatbots'} content={'We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.'} />
                <Feature heading={'Knowledgebase'} content={'Our models understand and process text by breaking it down into tokens. Tokens can be words or just chunks of characters. For example, the word “hamburger” gets broken up into the tokens “ham”, “bur” and “ger”, while a short and common word like “pear” is a single token.'} />
                <Feature heading={'Education'} content={'The API is powered by a set of models with different capabilities and price points. Our base GPT-3 models are called Davinci, Curie, Babbage and Ada.To learn more, visit our models documentation.'}/>
            </div>
        </div>
    </> );
}

export default WhatIsGpt3;