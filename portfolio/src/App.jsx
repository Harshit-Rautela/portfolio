import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPage from './pages/MainPage'
import LandingPage from './pages/LandingPage'
import SkillsPage from './pages/SkillsPage'

function App() {
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/landing-page' element={<LandingPage/>}/>
          <Route path='/skills-page' element={<SkillsPage/>}/>
        </Routes>
      </Router>
    </div>
  )
  
}

export default App
