import './App.css'

import Home from './components/Home'
import SingleBlog from './components/SingleBlog'
import AddBlog from './components/AddBlog'
import SharedLayout from './components/SharedLayout'
import { Routes, Route, Navigate } from 'react-router-dom'
import Profile from './components/Profile'
import EditBlog from './components/EditBlog'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './hooks/useAuth'
import Register from './components/Register'

function App() {


  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }>
            <Route path='/' element={<Home />} />
            <Route path='/addBlog' element={<AddBlog />} />
            <Route path='/editBlog/:id' element={<EditBlog />} />
            <Route path='/blogs/:id' element={<SingleBlog />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </AuthProvider>

      {/* <Navbar />
    <Sidebar />
    <Explore />
    <Footer /> */}
    </>
  )
}

export default App
