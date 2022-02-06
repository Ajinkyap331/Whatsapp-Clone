import React, { useState } from 'react';
import './CenterBox.css'
import { Left } from './Left';
import { Profile } from './Profile';
import { Right } from './Right';

export const CenterBox = () => {

  const [group, setgroup] = useState(false)
  return <div className='center-box'>
    <Left setgroup = {setgroup}/>
    <Right group = {group}/>
    <Profile group = {group}/>
  </div>;
};
