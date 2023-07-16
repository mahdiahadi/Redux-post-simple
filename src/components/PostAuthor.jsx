import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../features/post/users/usersSlice'

const PostAuthor = ({userId}) => {
    const user = useSelector(selectAllUsers)
    const author= user.find((u) => u.id === userId)
  return (
    <>
        {author ? author.name : 'unknown author'}
    </>
  )
}

export default PostAuthor