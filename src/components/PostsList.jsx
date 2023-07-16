import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllPosts } from '../features/post/postSlice';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from '@mui/material';
import ReactionsButton from './ReactionsButton';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import { selectAllUsers } from '../features/post/users/usersSlice';
import UsersList from './UsersList';

const PostsList = () => {
    const posts = useSelector(selectAllPosts)
    const users = useSelector(selectAllUsers)
    const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
    const renderedPosts = orderedPosts.map((post) => (
        <Card key={post.id} sx={{marginBottom:'1rem'}}>
            <CardActionArea>
                <CardContent>
                    <Typography variant='h5' component="div">
                        {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {post.content}
                    </Typography>
                    <Typography >
                        <PostAuthor userId={post.userId}/>
                    </Typography>
                    <Typography variant='body2' color="text.secondary">
                        <TimeAgo timeStamp={post.date}/>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <ReactionsButton post={post}/>
            </CardActions>
        </Card>
    ))
   
  return (
    <Grid container width="100%" justifyContent="space-around" alignContent="center">
    <Grid item xs={12} md={5}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant='h4'>
            Posts
          </Typography>
        </Grid>
        <Grid item>
          {renderedPosts}
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} md={5}>
      <UsersList/>
    </Grid>
  </Grid>
  )
}

export default PostsList