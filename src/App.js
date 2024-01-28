import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Homee from './Homee'
import Services from './Services'
import Nav from './Nav'
import About from './About'
export default function App() {
  return (
    <div> 
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Homee/>} />
          <Route path="about" element={<About/>} />
          <Route path="service" element={<Services/>} />
          </Routes>     
      </BrowserRouter>
    </div>
  )
}
