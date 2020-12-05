import React from 'react';

// import icons
import { CgMore } from 'react-icons/cg';
import { FaRegComment } from 'react-icons/fa';
import { FiRepeat, FiUpload } from 'react-icons/fi';
import { RiHeart3Line } from 'react-icons/ri';

// import css
import './TweetPost.css';

const TweetPost = ({quote, image}) => {

    return (<div className='body-tweet-container'>
    <div className='user-tweet-icon'>
        <div>
            <img src={image} alt={quote['author']}/>
        </div>
    </div>
    <div className='user-tweet-contents'>
        <div className='user-tweet-identity'>
            <div>
                <span className='user-tweet-name'>{quote['author']}</span>
                <span className='user-tweet-username'>@{quote['username']}</span>
            </div>
            <div className='user-tweet-more'>
                <CgMore className='user-tweet-more-icon' />
            </div>
        </div>
        <div className='user-tweet-text'>
            <div className='user-tweet'>
                    <span>{quote['quoteText']}</span>
            </div>
            <div className='user-tweet-buttons'>
                <span className='user-tweet-reply'>
                    <div>
                        <FaRegComment className='tweet-button-icon' />
                    </div>
                    <span className='tweet-icon-counter' >999.3k</span>
                </span>
                <span className='user-tweet-retweet'>
                    <div>
                        <FiRepeat className='tweet-button-icon' />
                    </div>
                    
                    <span className='tweet-icon-counter' >993.9k</span>
                </span>
                <span className='user-tweet-heart'>
                    <div>
                        <RiHeart3Line className='tweet-button-icon' />
                    </div>
                    <span className='tweet-icon-counter' >999.9m</span>
                </span>
                <span className='user-tweet-up'>
                    <div>
                        <FiUpload className='tweet-button-icon' />
                    </div>
                </span>
            </div>
        </div>
    </div>
</div>);
}

export default TweetPost;