import React from 'react';
import Feature from '../Feature/Feature';
import "./possibilityContainer.scss";

const PossibilityContainer = () => {
    return ( <>

        <div className='possibility' id='openAi'>
            <div className='possibility__heading'>
                <h1 className='text-gradient'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className='possibility__features'>
                <Feature heading={'Text Completion'} content={' You input some text as a prompt, and the model will generate a text completion that attempts to match whatever context or pattern you gave it.'} />
                <Feature heading={'Code Completion'} content={"It's most capable in Python and proficient in over a dozen languages including JavaScript, Go, Perl, PHP, Ruby, Swift, TypeScript, SQL, and even Shell."} />
                <Feature heading={'Image generation'} content={'The image generations endpoint allows you to create an original image given a text prompt. Generated images can have a size of 256x256, 512x512, or 1024x1024 pixels.'} />
                <Feature heading={'Safe To Use'} content={"OpenAI's Moderation API is free-to-use and can help reduce the frequency of unsafe content in your completions. Alternatively, you may wish to develop your own content filtration system tailored to your use case."} />
            </div>
        </div>
    </> );
}

export default PossibilityContainer;