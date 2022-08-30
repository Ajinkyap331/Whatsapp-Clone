import React from 'react';
import './LeftRight.css'
import { Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Chats, Groups } from './Chats';
import GroupsIcon from '@mui/icons-material/Groups';
import { Photo } from '../Data';

export const Left = ({ setgroup, Data, setname, setmessage, setshowprompt, Reload }) => {
    return <div className='left'>
        <nav className='left-nav'>
            <Avatar src={Photo.Babban}/>
            <p>{Data.MainCharacter}</p>
            <button onClick={() => Reload[1](!Reload[0])}>RELOAD</button>
        </nav>
        <section>
            <SearchIcon />
            <input placeholder='Search' />
        </section>
        <section style = {{cursor : "pointer"}} onClick = {() => setshowprompt(true)}>
            <GroupsIcon />
            <p>Create a Group</p>
        </section>
        <div style={{ overflow: "auto", height: "72.2vh" }}>
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
