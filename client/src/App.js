import React from 'react'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Home from './components/Home';
import Subjects from './components/Subjects';
import ScientificMethod from './components/Physics/ScientificMethod';
import ScientificMeasurement from './components/Physics/ScientificMeasurement'
import MathToolsforPhysics from './components/Physics/MathToolsforPhysics'
import ResolvingVector from './components/Physics/ResolvingVectors'
import About from './components/About';





const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='subject' element={<Subjects />}/>
        <Route path='physics/scientificmethod' element={<ScientificMethod/>}/>
        <Route path='physics/scientificmeasurement' element={<ScientificMeasurement />} />
        <Route path='physics/mathtoolsforphysics' element={<MathToolsforPhysics />} />
        <Route path='physics/resolvingvectors' element={<ResolvingVector />} />
        <Route path='about' element={<About />}/>
        
       
      </Routes>
    </BrowserRouter>
  )
}

export default App