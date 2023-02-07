import React from 'react'
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState,useEffect } from 'react';
import ThumbUpOffAltSharpIcon from '@mui/icons-material/ThumbUpOffAltSharp';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import { CardHeader } from '@mui/material';



import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function Home() {

    const [posts, setposts] = useState([])

 useEffect(()=>{
     async function getAllPost(){

        try{
          let data={}
            let posts = await axios.get("http://127.0.0.1:8000/post/")
            console.log(posts.data)
            setposts(posts.data)


        }

        catch(error){
            console.log(error)

        }
     }
getAllPost()

 },[])



  return (posts.map(post =>(
    <>
      <Card sx={{ maxWidth: 800 }}>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        alt="green iguana"
        height="700"
        image={post.img}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {post.title}
        </Typography>
      </CardContent>

      <CardActions >
        
        <ThumbUpOffAltSharpIcon sx={{ml: 1 }} onClick={() => alert('Liked')}/>
        <ShareIcon sx={{ml: 4 }} onClick={() => alert('shared')}/>
        <CommentIcon sx={{ml: 8 }} onClick={() => alert('write comment')} />  
            
      </CardActions>
      
      
    </Card>
    <br></br>
    <br></br>
    <br></br>

   </> 
                
  ))
              

              )
            
    
}

