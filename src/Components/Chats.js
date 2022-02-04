import React from 'react';
import { Avatar } from '@mui/material';
import Taarkh from '../Images/Taarakh.jpg'
import './Chats.css'

export const Chats = () => {
    return <div className="chat">
        <div>
            <Avatar src={Taarkh}/>
        </div>
        <div>
            <section className='chat-top'>
                <p>Ajinkya Patil</p>
                <p>1:20pm</p>
            </section>
            <section className='chat-bottom'>
                <p style={{ color: "gray" }}>OK</p>
                <p></p>
            </section>
        </div>
    </div>;
};
