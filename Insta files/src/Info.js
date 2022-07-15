import React, { Component } from 'react';
import "./Info.css";
import profile from './Images/profile.png';
import { Avatar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

function info() {
  return (
    <div className='Info'>
        <Grid container>
            <Grid className='Profile'> <Avatar className='pic' src={profile}/>
             <p className='username'>Adarsh_Aadi_79</p>
             <p className='switchacc'>Switch</p>
             <p className='Namee'>Adarsh Kumar</p>
            </Grid>

        </Grid>
        </div>
  )
}

export default info