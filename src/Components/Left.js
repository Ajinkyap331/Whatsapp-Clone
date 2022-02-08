import React from 'react';
import './LeftRight.css'
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Chats, Groups } from './Chats';

export const Left = ({ setgroup, Data, setname, setmessage }) => {
    return <div className='left'>
        <nav className='left-nav'>
            <Avatar src={Data.Characters.Babban} />
            <p>{Data.MainCharcter}</p>
        </nav>
        <section>
            <SearchIcon />
            <input placeholder='Search' />
        </section>
        <div style = {{overflow : "auto", height : "80vh"}}>
            {
                Data.Groups.map(name => {
                    return (
                        <Groups setgroup={setgroup} name={name} setname={setname} setmessage = {setmessage} />
                    )
                })
            }
            {
                Data.DM.map(name => {
                    return (
                        <Chats setgroup={setgroup} name={name} setname={setname} setmessage = {setmessage}/>
                    )
                })
            }
        </div>
    </div>;
};
