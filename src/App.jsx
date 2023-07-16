import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import { AddPostForm, AddUser, Layout, PostsList, UsersList } from './components'
import UserPage from './pages/UserPage'
import EditPostForm from './pages/EditPostForm'
import SinglePost from './pages/SinglePost'
import { Container } from '@mui/material'
function App() {

  return (
    <Container maxWidth='xl'>
    <Routes>
      <Route path='/' element={<Layout/>}>
          <Route index element={<PostsList/>}/>
        <Route path='post'>
          <Route index  element={<AddPostForm/>} />
          <Route path=':postId' element={<SinglePost/>} />
          <Route path='edit/:postId' element={<EditPostForm/>} />
        </Route>
        <Route path='user' >
          <Route index element={<AddUser/>} />
          <Route path='userslist' element={<UsersList/>} />
          <Route path=':userId' element={<UserPage/>} />
        </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
    </Container>
  )
}

export default App
