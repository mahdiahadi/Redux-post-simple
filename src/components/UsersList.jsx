import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../features/post/users/usersSlice'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import ReactionsButton from './ReactionsButton'
import TimeAgo from './TimeAgo'
import PostAuthor from './PostAuthor'

const UsersList = () => {
  const users = useSelector(selectAllUsers)
  const orderedUser = users.slice().sort((a,b) => b.date.localeCompare(a.date))
  const renderedUsers = orderedUser.map((user) => (
    <Card key={user.id} sx={{marginTop:'1rem'}}>
        <CardActionArea>
            <CardContent>
                <Typography variant='h5' component="div">
                    {user.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {user.name}
                </Typography>
                <Typography >
                    <PostAuthor userId={user.id}/>
                </Typography>
                <Typography variant='body2' color="text.secondary">
                    <TimeAgo timeStamp={user.date}/>
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <ReactionsButton user={user}/>
        </CardActions>
    </Card>
))


  return (
   <>
    <Typography variant='h4'>
      Users
    </Typography>
    {renderedUsers}
</>
  )
}

export default UsersList