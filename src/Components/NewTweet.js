import React, { useState } from 'react';

// import components
import NewTweetPrivacy from './NewTweetPrivacy';

// import logo
import logo from '../twitter-logo.png';

// import icons

import { IoImageOutline } from 'react-icons/io5';
import { AiOutlineGif } from 'react-icons/ai';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { VscSmiley } from 'react-icons/vsc';
import { RiCalendarEventLine } from 'react-icons/ri';

// import css
import './NewTweet.css';


const NewTweet = () => {
    let status = false;
    const [visibility, setVisibility] = useState(false);
    
    return (
        <div className='write-post'>
            <div className='write-post-user-icon'>
                <img src={logo} alt="user icon"/>
            </div>
            <div className='write-post-content'>
                <div className='write-post-input'>
                    <input onFocus={() => setVisibility(!status)} className='post-input' type="text" placeholder="What's happening?"/>
                </div>
                {visibility ? <NewTweetPrivacy/> : <div></div>}
                <div className='write-post-buttons'>
                    <div className='button-icons'>
                        <div className='button-icons-container'>
                            <IoImageOutline className='button-icons-icon' />
                        </div>
                        <div className='button-icons-container'>
                            <AiOutlineGif className='button-icons-icon' />
                        </div>
                        <div className='button-icons-container'>
                            <BiBarChartAlt2 className='button-icons-icon' />
                        </div>
                        <div className='button-icons-container'>
                            <VscSmiley className='button-icons-icon' />
                        </div>
                        <div className='button-icons-container'>
                            <RiCalendarEventLine className='button-icons-icon' />
                        </div>
                    </div>
                    <div className='tweet-button'>
                        <button>Tweet</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewTweet;