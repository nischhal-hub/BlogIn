import './App.css'

import Home from './components/Home'
import SingleBlog from './components/SingleBlog'
import Profile from './components/Profile'
import SharedLayout from './components/SharedLayout'
import { Routes,Route,Navigate } from 'react-router-dom'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<SharedLayout />}>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
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
