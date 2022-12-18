import "./blogs.scss";
import Blog from '../Blog/Blog';
import Blog1 from '../../assets/blog1.png';
import Blog2 from '../../assets/blog2.png';
import Blog3 from '../../assets/blog3.png';
import Blog4 from '../../assets/blog4.png';
import Blog5 from '../../assets/blog5.png';

const Blogs = () => {
    return (<>

        <div className="blogs" id="caseStudies">
            <div className="blogs__main">
                <Blog img={Blog1} content={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
            </div>
            <div className="blogs__secondary">
                <Blog img={Blog2} content={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
                <Blog img={Blog3} content={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
                <Blog img={Blog4} content={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
                <Blog img={Blog5} content={'GPT-3 and Open  AI is the future. Let us exlore how it is?'} />
            </div>
        </div>
    </>);
}

export default Blogs;