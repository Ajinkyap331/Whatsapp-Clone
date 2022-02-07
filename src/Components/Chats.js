import React from 'react';
import { Avatar } from '@mui/material';
import './Chats.css'

export const Chats = ({setgroup}) => {
    return <div className="chat" onClick = {(e) => {setgroup(false); console.log(e.target.outerText)}} >
        <div>
            <Avatar/>
        </div>
        <div>
            <section className='chat-top'>
                <p>Ajinkya Patil</p>
                <p>1:20pm</p>
            </section>
            <section className='chat-bottom'>
                <p style={{ color: "gray" }}>OK</p>
                {/* <p style = {{fontSize : "10px", background : "green", borderRadius : "50%"}}>1</p> */}
            </section>
        </div>
    </div>;
};

export const Groups = ({setgroup, name}) => {
    return <div className="chat"  onClick = {() => setgroup(true)} >
        <div>
            <Avatar/>
        </div>
        <div>
            <section className='chat-top'>
                <p>{name}</p>
                <p>1:20pm</p>
            </section>
            <section className='chat-bottom'>
                <p style={{ color: "gray" }}>OK</p>
                <p></p>
            </section>
        </div>
    </div>;
}