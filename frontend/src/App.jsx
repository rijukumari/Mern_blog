import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Singup from './pages/Singup';
import SingleBlog from './pages/SingleBlog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/blogs' element = {<Blogs/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Singup/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
        <Route path='/blog/:id' element = {<SingleBlog/>}/>
      </Routes>
      <Footer/>
      < ToastContainer />
    </div>
  )
}

export default App
