
import React from 'react';
import "./stories.css";
import { Avatar } from '@material-ui/core';
import image from './Images/profile.png';
import Dhoni from './Images/msd.png';
import ntr from './Images/tarak.jpg';
import kiara from './Images/kiara.jpg';
import dora from './Images/doremon.jpg';
import logo from './Images/logo.jpg';
import hero from './Images/rajini.jpg';
import lpu from './Images/lovely.jpg';
import sachin from './Images/sachin.jpg';
import amazon from './Images/amazon.png';

function stories() {
  return (
    <div>
      <div className='Stories'>
        <div className='Names'>
          <Avatar className='status' src={dora}/>
          <div className='font'>Doramon</div>
        </div>
        <div className='Names'>
          <Avatar className='status' src={Dhoni}/>
          <div className='font'>Ms.Dhoni</div>
        </div>
        <div className='Names'>
          <Avatar className='status' src={ntr}/>
          <div className='font'>Jr NTR</div>
        </div>
        <div className='Names'>
          <Avatar className='status' src={kiara}/>
          <div className='font'> Kiara</div>
        </div>
        <div className='Names'>
          <Avatar className='status' src={logo}/>
          <div className='font'>comedy</div>
        </div>
        <div className='Names'>
          <Avatar className='status' src={hero}/>
          <div className='font'>Thalaiva</div>
        </div>
        <div className='Names'>
          <Avatar className='status' src={lpu}/>
          <div className='font'>LPUUNI</div>
        </div>
        <div className='Names'>
          <Avatar className='status' src={sachin}/>
          <div className='font'>Sachin</div>
        </div>
        <div className='Names'>
          <Avatar className='status' src={amazon}/>
          <div className='font'>Amazon</div>
        </div>
    </div>
    </div> 
  )
}

export default stories