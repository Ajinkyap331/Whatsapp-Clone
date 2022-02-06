import React from 'react';
import './LeftRight.css'
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Chats, Groups } from './Chats';

export const Left = ({setgroup}) => {
    return <div className='left'>
        <nav className='left-nav'>
            <Avatar />
        </nav>
        <section>
            <SearchIcon />
            <input placeholder='Search' />
        </section>
        <Chats setgroup = {setgroup} />
        <Groups setgroup = {setgroup}/>
    </div>;
};
