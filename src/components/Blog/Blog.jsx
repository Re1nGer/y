import React from 'react';
import "./blog.scss";

const Blog = ({img, date, content}) => {

    return (<>
        <div className='blog'>
            <div className='blog__img'>
                <img src={img} alt='blog image' />
            </div>

            <div className='blog__description'>
                <div className='blog__date'>{date}</div>
                <div className='blog__content'>{content}</div>
                <div className='blog__actions'>
                    <a className='blog__link'>Read Full Article</a>
                </div>
            </div>

        </div>
    </>);
}

export default Blog;