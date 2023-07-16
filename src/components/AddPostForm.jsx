import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../features/post/users/usersSlice';
import { addToPost } from '../features/post/postSlice';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {
    const [title, setTitle]= useState('')
    const [content,setContent]= useState('');
    const [userId,setUserId]= useState('')
    const users = useSelector(selectAllUsers);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const optionUser = users.map((u) => (
        <MenuItem value={u.id} key={u.id}>
            {u.name}
        </MenuItem>
    ))
    const onSavePostClick = () => {
        if(title && content ){
          dispatch(
            addToPost(title,content,userId)
          )
          navigate('/')
          setTitle(''),
          setContent('')
        }
      }
  return (
    <Grid container>
        <Grid item xs={12} md={6}  sx={{ margin:'0 auto',marginTop:'3rem',direction:'column',justifyContent:'center',alignContent:'space-between'}}>
        <Typography variant='h4' sx={{marginBottom:'2rem'}}>Add a New Post</Typography>
      <FormControl fullWidth>
        
        <InputLabel id="select-optgroup-label">Author</InputLabel>
        <Select
          sx={{ marginBottom:'1rem'}}
          labelId="select-optgroup-label"
          id="select-optgroup"
          value={userId}
          onChange={(e)=>setUserId(e.target.value)}
          label="Author"
        >
            <MenuItem value="">
       
            </MenuItem>
            {optionUser}
        </Select>
      

      <TextField
        sx={{ marginBottom:'1rem'}}
        id="input1"
        name="input1"
        label="Post Title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        fullWidth
      />

      <TextField
        sx={{ marginBottom:'1rem'}}
        id="input2"
        name="input2"
        label="Content"
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        fullWidth
      />

      <Button
       type="submit" variant="contained" color="primary"
        onClick={onSavePostClick}
       >
        Save
      </Button>
      </FormControl>
        </Grid>
    </Grid>
  )
}

export default AddPostForm