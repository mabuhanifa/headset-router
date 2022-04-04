import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../CustomHook/CustomHook';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Home.css';

const Home = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate();
    //console.log(reviews);
    
    return (
        <div>
            <div className='product'>
                <div className='title'>
                    <h1>Your next HeadPhone</h1>
                    <h1>Your best HeadPhone</h1>
                    <p>
                    WH-1000XM4 Wireless Noise Cancelling Headphones is the Best noise-cenceling Head Phone you can find right-now on the market.
                    </p>
                    <a className='btn' href='https://www.sony-asia.com/electronics/headband-headphones/wh-1000xm4' target="_blank" rel="noreferrer">Live Demo</a>
                </div>
                <div>
                <img src="https://www.sony-asia.com/image/5d02da5df552836db894cead8a68f5f3" alt="" />
                </div>
            </div>
            <h1 className='reviewhead'> Customer Reviews(3)</h1>
            <div className='grid'>
            {
                    reviews.slice(0,3).map(review => <ReviewItem
                        key={review.id}
                        review={review}
                        ></ReviewItem>

                    )
                }
            </div>
            
            <button onClick={()=> navigate('/reviews')} className='sa'>See all Reviews</button>
            
        </div>
    );
};

export default Home;