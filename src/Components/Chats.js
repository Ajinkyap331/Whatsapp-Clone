import React from 'react';
import { Avatar } from '@mui/material';
import './Chats.css'
import { Photo } from '../Data';


export const Chats = ({ setgroup, name, setname, setmessage, Data }) => {
    return <div className="chat" onClick={() => { setgroup(false); setname(name); setmessage([]) }} >
        <div>
            <Avatar src={Photo[name]} />
        </div>
        <div>
            <section className='chat-top'>
                <p>{Data.Characters[name].name}</p>
                <p>{Data.Characters[name].time}</p>
            </section>
            <section className='chat-bottom'>
                <p style={{ color: "gray" }}>{Data.Characters[name].lastMessage}</p>
                {
                    (Data.Characters[name].NOM !== 0) && <div className="message-number"> <p>{Data.Characters[name].NOM}</p> </div>
                }
            </section>
        </div>
    </div>;
};

export const Groups = ({ setgroup, name, setname, setmessage, Data }) => {
    return <div className="chat" onClick={() => { setgroup(true); setname(name); setmessage([]) }} >
        <div>
            <Avatar src={Photo[name]} />
        </div>
        <div>
            <section className='chat-top'>
                <p>{Data.Characters[name].name}</p>
                <p>{Data.Characters[name].time}</p>
            </section>
            <section className='chat-bottom'>
                <p style={{ color: "gray" }}>{Data.Characters[name].lastMessage}</p>
                {
                    (Data.Characters[name].NOM !== 0) && <div className="message-number"> <p>{Data.Characters[name].NOM}</p> </div>
                }
            </section>
        </div>
    </div>;
}