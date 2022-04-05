import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='qna'>
        <div>
            <h4>Semantic tag</h4>
            <p>Semantic tags or elements relate to those tags or elements that have a meaning in a piece of code defining their effects and purpose. For example, section tags define or relate to a section that can contain another element or multiple elements. The same way a p tag defines a paragraph or a nav tag gives a hint of navbar. Semantic tags define their meaning to both the browser and the developer so that all the parts of the website can be understated by the browser and developer. Semantic tags are used for website optimization on the search engine so that it can understand the different parts of the website and rank them properly.</p>
        </div>
        <div>
            <h4>Context API</h4>
            <p>React Context API is a tool like other hooks that allows managing states globally. Using context API a user can avoid "prop drilling". Prop drilling is jargon that defines the processing of sending props from a higher-level component to lower-level components or top to down (parent to child) one by one. Props drilling takes a lot of time and makes the application slow and complex. Context API allows state management from a global position and makes it easy to change and update of that state from any level and any component.</p>
        </div>
        </div>
    );
};

export default Blogs;