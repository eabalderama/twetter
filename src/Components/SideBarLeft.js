import React from 'react';

//import icons
import { RiHome7Fill, RiFileList2Line } from 'react-icons/ri';
import { FaTwitter } from 'react-icons/fa';
import { BiHash, BiBookmark } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FiMail } from 'react-icons/fi';
import { HiOutlineUser } from 'react-icons/hi';
import { CgMoreO, CgMore } from 'react-icons/cg';

//import css
import './SideBarLeft.css';


const SideBar = ({user}) => {
    return (
        <div className='sidebar-left'>
            <div className='sidebar-left-container'>
                <div className='sidebar-left-logo-container'>
                    <FaTwitter className='sidebar-left-logo' />
                </div>
                <div className='item-list-container'>
                    <ul className='item-list'>
                        <li className='item'>
                            <div className='item-content active'>
                                <RiHome7Fill className='list-icon' />
                                <a href='/#'>Home</a>
                            </div>
                        </li>
                        <li className='item'>
                            <div className='item-content'>
                                <BiHash className='list-icon' />
                                <a href='/#'>Explore</a>
                            </div>
                        </li>
                        <li className='item'>
                            <div className='item-content'>
                                <IoMdNotificationsOutline className='list-icon' />
                                <a href='/#'>Notifications</a>
                            </div>
                        </li>
                        <li className='item'>
                            <div className='item-content acive'>
                                <FiMail className='list-icon' />
                                <a href='/#'>Messages</a>
                            </div>
                        </li>
                        <li className='item'>
                            <div className='item-content'>
                                <BiBookmark className='list-icon' />
                                <a href='/#'>Bookmarks</a>
                            </div>
                        </li>
                        <li className='item'>
                            <div className='item-content'>
                                <RiFileList2Line className='list-icon' />
                                <a href='/#'>List</a>
                            </div>
                        </li>
                        <li className='item'>
                            <div className='item-content'>
                                <HiOutlineUser className='list-icon' />
                                <a href="/#">Profile</a>
                            </div>
                        </li>
                        <li className='item'>
                            <div className='item-content'>
                                <CgMoreO className='list-icon' />
                                <a href='/#'>More</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='tweet-btn'>
                        <button>Tweet</button>
                </div>  
            </div>
            <div className='user-profile-btn'>
                <div className='user-profile'>
                    <img src={user['image']} alt={user['name']} />
                </div>
                <div className='user-name'>
                    <span>{user['name']}</span>
                    <p>@{user['username']}</p>
                </div>
                <div className='user-more'>
                    <CgMore className='user-more-icon' />
                </div>
            </div>
        </div>
    );
}

export default SideBar;