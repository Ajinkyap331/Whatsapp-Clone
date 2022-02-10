import React from 'react';
import './LeftRight.css'
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Chats, Groups } from './Chats';
import GroupsIcon from '@mui/icons-material/Groups';
import { Photo } from '../Data';

export const Left = ({ setgroup, Data, setname, setmessage, setshowprompt }) => {
    return <div className='left'>
        <nav className='left-nav'>
            <Avatar src={Photo.Babban} />
            <p>{Data.MainCharacter}</p>
        </nav>
        <section>
            <SearchIcon />
            <input placeholder='Search' />
        </section>
        <section style = {{cursor : "pointer"}} onClick = {() => setshowprompt(true)}>
            <GroupsIcon />
            <p>Create a Group</p>
        </section>
        <div style={{ overflow: "auto", height: "71.5vh" }}>
            {
                Data.Groups.map(name => {
                    return (
                        <Groups setgroup={setgroup} name={name} setname={setname} setmessage={setmessage} Data = {Data}/>
                    )
                })
            }
            {
                Data.DM.map(name => {
                    return (
                        <Chats setgroup={setgroup} name={name} setname={setname} setmessage={setmessage} Data = {Data}/>
                    )
                })
            }
        </div>
    </div>;
};
