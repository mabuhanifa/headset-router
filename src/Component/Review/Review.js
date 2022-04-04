import React from 'react';
import useReviews from '../../CustomHook/CustomHook';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [reviews] = useReviews();
    return (
        <div className='grid'>
            {
                reviews.map(review => <ReviewItem
                    key={review.id}
                    review={review}
                    ></ReviewItem>

                )
            }
        </div>
    );
};

export default Review;