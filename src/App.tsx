import './App.css'

import Home from './components/Home'
import SingleBlog from './components/SingleBlog'
import AddBlog from './components/AddBlog'
import SharedLayout from './components/SharedLayout'
import { Routes,Route,Navigate } from 'react-router-dom'
import Profile from './components/Profile'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<SharedLayout />}>
          <Route path='/' element={<Home/>}/>
          <Route path='/addBlog' element={<AddBlog/>}/>
          <Route path='/blogs/:id' element={<SingleBlog/>}/>
          <Route path='/profile' element={<Profile />}/>
      </Route>
    </Routes>
    {/* <Navbar />
    <Sidebar />
    <Explore />
    <Footer /> */}
    </>
  )
}

export default App
