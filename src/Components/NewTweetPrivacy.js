import React from 'react';

import { FaGlobeAmericas } from 'react-icons/fa';

const NewTweetPrivacy = () => {
    return (
        <div className='write-post-privacy'>
            <div>
                <FaGlobeAmericas className='write-post-privacy-icon' />
                <span>Everyone can reply</span>
            </div>
        </div>
    );
}

export default NewTweetPrivacy;