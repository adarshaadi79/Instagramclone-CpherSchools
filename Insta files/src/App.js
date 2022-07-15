import './App.css';
import instagram from './Images/instalogo.jpg';
import Post from './Post';
import React, { useState } from 'react';
import home from './Images/home.png';
import message from './Images/message.jpg';
import addpost from './Images/posting.png';
import reels from './Images/reels.png';
import heart from './Images/heart.png';
import profile from './Images/profile.png';
import Stories from './stories.js';
import Grid from '@material-ui/core/Grid';
import Info from "./Info.js";
import Suggestions from './Suggestions.js';


function App() {
  const [posts,setPosts]= useState([
    {Username: "Virat kohli", 
    caption: "Match day",
    imageUrl: "https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202205/virat_kohli_new_look-sixteen_nine.jpg"},
    {Username: "Dominos", 
    caption: "Taste the best",
    imageUrl: "https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=2000"},
    {Username: "RRR Movie",
    caption: "Ram & Bheem",
     imageUrl: "https://c.ndtvimg.com/2022-01/ioluluq_rrr_625x300_01_January_22.jpg?im=Resize=(1230,900)"},
    {Username: "Animal planet",
    caption: "Cutiee",
    imageUrl: "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg"},
    {Username: "Spider-Man",
    caption: "Helloo! Spidy here...",
    imageUrl: "https://cdn.vox-cdn.com/thumbor/Sfkvc3-Jb32Bj__n8fMhsu8keko=/0x0:1600x900/1200x800/filters:focal(672x322:928x578)/cdn.vox-cdn.com/uploads/chorus_image/image/67762052/marvels_spiderman_remastered_screenshot_01_disclaimer_en_01oct20.0.png"},
    {Username: "Inspiring_Quotes",
    caption: "AIM High FLY High",
    imageUrl: "https://www.theeducationmagazine.com/wp-content/uploads/2020/03/1-8.jpg"},
  ]);
  return(
    <div className='App'>
      <div className="app_header">
        <Grid container>
          <Grid item xs={2}>
          <img className="app_headerImage"
      src={instagram} alt="" />
          </Grid>
          <Grid items xs={3}>
          <input type="text" className='Search' placeholder="Search" />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid className='Controls' item xs={4}>
          <img className= "Home_button"
      src={home} alt=""/>
          <img className="msg_sym"
      src={message} alt=""/>
          <img className="add_post"
      src={addpost} alt=""/>     
          <img className="reels"
      src={reels} alt=""/>
           <img className="heart_sym"
      src={heart} alt=""/>
         <img className="pro"
      src={profile} alt=""/>
      </Grid>
      </Grid>
      
      
      
      
      
     
      
        
    </div>
    <div>
      <Grid container>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={5}>
          <div>
        <Stories/>
       </div>
        {
      posts.map(post =>(
        <Post Username={post.Username} caption={post.caption} imageUrl={post.imageUrl}/>

      ))
    }
        </Grid>
        <Grid item xs={3}>
          <Info/>
          <Suggestions/>
        </Grid>
        <Grid item xs={1}>
      
        </Grid>
      </Grid>
      
    
    
  
    </div>
    </div>
  );
}

export default App;
