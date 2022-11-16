import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import Projects from './pages/portfolio/Projects'

const App = () => {
  return ( 
  <BrowserRouter basename="/" >
  <Routes>
      <Route path='' element={<HomePage />}/>
      <Route path='Projects' element={<Projects />}/>
      </Routes>
  </BrowserRouter>
  )
}

export default App