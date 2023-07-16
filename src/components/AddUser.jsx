import { Button, FormControl, Grid, InputLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, selectAllUsers } from '../features/post/users/usersSlice'

const AddUser = () => {
    const [name,setName]=useState('');
    const [userId,setUserId] = useState('')
    const dispatch = useDispatch()
    const numObject = useSelector(selectAllUsers)
    let length = numObject.length;
    const generateUserId =()=>{
        const id = length;
        length++;
        return id
    }
    const saveAuthor = () => {
       const id = generateUserId()
        dispatch(addUser(name,id))
    }
  return (
    <Grid container>
        <Grid item xs={12} md={6}  sx={{ margin:'0 auto',marginTop:'3rem',direction:'column',justifyContent:'center',alignContent:'space-between'}}>
        <Typography variant='h4' sx={{marginBottom:'2rem'}}>Add a New Author</Typography>
      <FormControl fullWidth>

      <TextField
        sx={{ marginBottom:'1rem'}}
        id="input1"
        name="input1"
        label="Author name"
        value={name}
        onChange={(e) => setName(e.target.value) }
        fullWidth
      />

    
      <Button
       type="submit" variant="contained" color="primary"
        onClick={saveAuthor}
       >
        Save
      </Button>
      </FormControl>
        </Grid>
    </Grid>
  )
}

export default AddUser