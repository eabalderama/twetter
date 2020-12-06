import React from 'react';

// import components
import NewTweet from './NewTweet.js';
import TweetPost from './TweetPost.js';

// import icons
import { HiOutlineSparkles } from 'react-icons/hi';

// import css
import './Body.css';

const Body = ({posts, setPage, page}) => {
    console.log(...posts);
    const loadMoreTweet = () => {
        setPage(page+10);
    }
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
                {posts.map((post) => (
                    <TweetPost 
                        key = {post.key}
                        quote={post.quoteText}
                        author = {post.author}
                        username = {post.username}
                        image = {post.image}
                    />
                ))}
                
                <div className='load-more-tweet' onClick={loadMoreTweet}>
                    <span>Load more tweets</span>
                </div>
            </div>
            
            
        </div>
    );
}

export default Body;