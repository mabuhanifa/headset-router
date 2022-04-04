import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    //console.log(props);
    const {name,img,review,rating} = props.review;
    console.log(img);
    return (
        <div className='review'>
            <div className='detail'>
            <img src={img} alt="" /> <h4>  {name}</h4>
            </div>
            <div className='rating'>
            <h5>Rating : {rating}</h5>
            <p>{review}</p>
            </div>

        </div>
    );
};

export default ReviewItem;