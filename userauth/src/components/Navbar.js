import React from 'react'
import {AppBar,Box,Toolbar,Typography,Button} from '@mui/material'
import { Navigate, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <Box sx={{flexGrow:1}}>
<AppBar position='static' color='secondary' >
    <Toolbar>
        <Typography variant='h5' component="div" sx={{flexGrow:1}}>
            User-Auth

        </Typography>
        <Button component={NavLink} to='/'  style={({isActive})=>{return{backgroundColor:isActive?'gray' : ""}}} sx={{color:'white',fontSize:'20px'}}>home</Button>
        <Button component={NavLink} to='/contact' style={({isActive})=>{return{backgroundColor:isActive?'gray' : ""}}} sx={{color:'white',fontSize:'20px'}}>contact</Button>

    </Toolbar>

</AppBar>
     </Box>
    </>
  )
}

export default Navbar
