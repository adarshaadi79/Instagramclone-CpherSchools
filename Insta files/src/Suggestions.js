import React, { Component } from 'react';
import "./Suggestions.css";
import profile from './Images/profile.png';
import { Avatar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import flower from './Images/flower.jpg';
import tower from './Images/eiffel.jpg';
import bramhi from './Images/Bramhi.jpg';
import chris from './Images/chris.jpg';
import salman from './Images/bhai.jpg';
import sam from './Images/sam.jpg';

function info() {
  return (
    <div>
        <div className="suggestions_container">
            <div className="suggestions_header">
                <div>Suggestions For You</div>
            </div>
            <div className='suggestions_body'>
                <div className='suggestions_friends'></div>
                <Grid container>
                    <Grid className='abc'>
                    <Avatar src={flower} className='suggestions_image'/>
                <div className='suggestions_username'>Her_soul</div>
                <p className='Follow'>Follow</p>
                    </Grid>
                    <Grid className='abc'>
                    <Avatar src={tower} className='suggestions_image'/>
                <div className='suggestions_username'>Mr.Explorer</div>
                <p className='Follow'>Follow</p>
                    </Grid>
                    <Grid className='abc'>
                    <Avatar src={bramhi} className='suggestions_image'/>
                <div className='suggestions_username'>Memes_Adda</div>
                <p className='Follow'>Follow</p>
                    </Grid>
                    <Grid className='abc'>
                    <Avatar src={chris} className='suggestions_image'/>
                <div className='suggestions_username'>Cherry</div>
                <p className='Follow'>Follow</p>
                    </Grid>
                    <Grid className='abc'>
                    <Avatar src={salman} className='suggestions_image'/>
                <div className='suggestions_username'>Salman</div>
                <p className='Follow'>Follow</p>
                    </Grid>
                    <Grid className='abc'>
                    <Avatar src={sam} className='suggestions_image'/>
                <div className='suggestions_username'>Magic__peach</div>
                <p className='Follow'>Follow</p>
                    </Grid>

                </Grid>
                
            </div>
        </div>
    </div>
  )
}

export default info
