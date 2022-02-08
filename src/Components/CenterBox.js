import React, { useState } from 'react';
import './CenterBox.css'
import { Left } from './Left';
import { Profile } from './Profile';
import { Right } from './Right';

export const CenterBox = ({Data}) => {

  const [group, setgroup] = useState(false)

  const [name, setname] = useState("")

  return <div className='center-box'>
    <Left setgroup = {setgroup} Data = {Data} setname = {setname}/>
    <Right group = {group} Data  = {Data } name = {name}/>
    <Profile group = {group} Data  = {Data } name = {name}/>
  </div>;
};
