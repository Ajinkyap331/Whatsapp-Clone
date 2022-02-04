import React from 'react';
import './CenterBox.css'
import { Left } from './Left';
import { Right } from './Right';

export const CenterBox = () => {
  return <div className='center-box'>
    <Left/>
    <Right/>
  </div>;
};
