import { AppBar, Box, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Grid container>
        <Grid item xs={12} >
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
       <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Redux Blog
          </Typography>
          <Button color="inherit"><Link to="user" style={{ textDecoration:'none',color:'#fff'}}>User</Link></Button>
          <Button color="inherit"><Link to='post' style={{ textDecoration:'none',color:'#fff'}}>Post</Link></Button>
          <Button color="inherit"><Link to='/' style={{ textDecoration:'none',color:'#fff'}}>Home</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
        </Grid> 
    </Grid>
  )
}

export default Header