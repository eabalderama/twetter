import React from 'react';

// import logo
import logo from '../twitter-logo.png';

// import icons
import { FaGlobeAmericas } from 'react-icons/fa';
import { IoImageOutline } from 'react-icons/io5';
import { AiOutlineGif } from 'react-icons/ai';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { VscSmiley } from 'react-icons/vsc';
import { RiCalendarEventLine } from 'react-icons/ri';

// import css
import './NewTweet.css';

const NewTweet = () => {

    return (
        <div className='write-post'>
            <div className='write-post-user-icon'>
                <img src={logo} alt="user icon"/>
            </div>
            <div className='write-post-content'>
                <div className='write-post-input'>
                    <input type="text" placeholder="What's happening?"/>
                </div>
                <div className='write-post-privacy'>
                    <div>
                        <FaGlobeAmericas className='write-post-privacy-icon' />
                        <span>Everyone can reply</span>
                    </div>
                </div>
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