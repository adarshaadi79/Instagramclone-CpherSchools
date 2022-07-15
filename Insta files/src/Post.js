import React from 'react'
import virat from "./Images/virat.jpg";
import './post.css';
import heart from './Images/heart.png';
import com from './Images/comment.png';
import share from './Images/share.png';
import save from './Images/save.png';
import {Avatar} from "@material-ui/core"

function Post({Username, caption, imageUrl}) {
  return (
    <div className="Post">
        <div className='post_header'>
            <Avatar className="Avatar_post"
            >V</Avatar> 
            <h3>{Username}</h3>
            </div>
    <img className='virat' src={imageUrl}/>
    <div>
    <img className='heart' src={heart}/>
    <img className='comm' src={com}/>
    <img className='share' src={share}/>
    <img className='save' src={save}/>
    </div>
    <h4 className="post_text"><strong>{Username}</strong> {caption}</h4>
    <input className='Comment' placeholder='Add a comment...'/>
    </div>
    
  )
}

export default Post