import React from 'react';

// import components
import NewTweet from './NewTweet.js';
import TweetPost from './TweetPost.js';

// import icons
import { HiOutlineSparkles } from 'react-icons/hi';

// import css
import './Body.css';

const Body = ({quote, image}) => {
   
    return (
        <div className='body-container'>
            <div className='body-header'>
                <div className='body-header-tab-name'>
                    <span>Home</span>
                </div>
                <div className='body-header-tab-icon'>
                    <HiOutlineSparkles className='sparkle' />
                </div>
            </div>
            <NewTweet />
            
            <div className='body-spacer'></div>

            <div className='body-main'>
                <TweetPost quote={quote} image={image}/>
            </div>
            
            
        </div>
    );
}

export default Body;