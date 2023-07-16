import { Button, Grid } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAddes } from '../features/post/postSlice'
import { addReactions } from '../features/post/users/usersSlice'

const ReactionsButton = ({post,user}) => {
    const dispatch = useDispatch()
    const reactionsEmoji= {
        thumbsUp:'👍',
        wow:'❤️',
        heart:'🤩',
        coffee:'☕'
    }

    const emojiesButton = Object.entries(reactionsEmoji).map(([name,emoji]) => {
        return(
            <Button
                key={name}
                type='button'
                onClick={ () => dispatch(
                        post ?
                    reactionAddes({id:user ? user.id : post.id,reaction:name})
                            :
                    addReactions({id:user ? user.id : post.id,reaction:name})
                    )}
            >
                {emoji} {user ? user.reactions[name] : post.reactions[name]}
            </Button>
        )
    })
  return (
    <Grid>
        {emojiesButton}
    </Grid>
  )
}

export default ReactionsButton