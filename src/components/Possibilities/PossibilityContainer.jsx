import React from 'react';
import Feature from '../Feature/Feature';
import "./possibilityContainer.scss";

const PossibilityContainer = () => {
    return ( <>

        <div className='possibility'>
            <div className='possibility__heading'>
                <h1 className='text-gradient'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className='possibility__features'>
                <Feature heading={'Improving end distrusts instantly '} content={'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'} />
                <Feature heading={'Become the tended active'} content={'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'} />
                <Feature heading={'Message or am nothing'} content={'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'} />
                <Feature heading={'Really boy law county'} content={'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'} />
            </div>
        </div>
    </> );
}

export default PossibilityContainer;