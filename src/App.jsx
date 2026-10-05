import React from 'react'

import {Routes,Route}  from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import ResumeGenerate from './pages/ResumeGenerate'
import UserForm from './pages/UserForm'
import View from './pages/View'
import History from './pages/History'



function App() {
  return (
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column'}}>
    <Header/>
    
    <div style={{flex:1 , padding:'20px'}}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/resume' element={<ResumeGenerate />} />
        <Route path='/form' element={<UserForm />} />
        <Route path='/resume/:id/view' element={<View />} />
        <Route path='/history' element={<History />} />
    </Routes>
    </div>

    <Footer/>
    </div>
  )
}

export default App