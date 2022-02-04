import React from 'react';
import './LeftRight.css'
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Chats } from './Chats';
import Jethalal from '../Images/jethalal.jpg'

export const Left = () => {
    return <div className='left'>
        <nav className='left-nav'>
            <Avatar src={Jethalal} />
        </nav>
        <section>
            <SearchIcon />
            <input placeholder='Search' />
        </section>
        <Chats />
        <Chats />
    </div>;
};
