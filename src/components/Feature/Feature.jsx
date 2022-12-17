import "./feature.scss";

const Feature = ({heading, content }) => {
    return ( <>
        <div className={`feature`}>
            <div className="feature__heading">
                {heading}
            </div>
            <div className='feature__content'>
                {content}
            </div>
        </div>
    </> );
}

export default Feature;