import React, { useState } from 'react';
import './CenterBox.css'
import { Left } from './Left';
import { Profile } from './Profile';
import { Right } from './Right';

export const CenterBox = ({Data}) => {

  const [group, setgroup] = useState(false)

  const [name, setname] = useState("")

  const [message, setmessage] = useState([]);  

  return <div className='center-box'>
    <Left setgroup = {setgroup} Data = {Data} setname = {setname} setmessage = {setmessage}/>
    <Right group = {group} Data  = {Data } name = {name} message = {message} setmessage = {setmessage}/>
    <Profile group = {group} Data  = {Data } name = {name}/>
  </div>;
};
