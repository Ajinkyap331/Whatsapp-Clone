import React from 'react';
import { Avatar } from '@mui/material';
import './Chats.css'
import { Data } from '../Data';

export const Chats = ({ setgroup, name, setname }) => {
    return <div className="chat" onClick={() => { setgroup(false); setname(name) }} >
        <div>
            <Avatar src={Data.Characters[name].photo} />
        </div>
        <div>
            <section className='chat-top'>
                <p>{Data.Characters[name].name}</p>
                <p>{Data.Characters[name].time}</p>
            </section>
            <section className='chat-bottom'>
                <p style={{ color: "gray" }}>{Data.Characters[name].lastMessage}</p>
                {/* <p style = {{fontSize : "10px", background : "green", borderRadius : "50%"}}>1</p> */}
            </section>
        </div>
    </div>;
};

export const Groups = ({ setgroup, name, setname }) => {
    return <div className="chat" onClick={() => { setgroup(true); setname(name) }} >
        <div>
            <Avatar src={Data.Characters[name].photo} />
        </div>
        <div>
            <section className='chat-top'>
                <p>{Data.Characters[name].name}</p>
                <p>{Data.Characters[name].time}</p>
            </section>
            <section className='chat-bottom'>
                <p style={{ color: "gray" }}>{Data.Characters[name].lastMessage}</p>
                <p></p>
            </section>
        </div>
    </div>;
}