import { useState } from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

import './App.css'
import Navbar from './components/layouts/Navbar'
import Home from './pages/Home'
import Masculino from './pages/Maculino'
import Joias from './pages/Joias'
import Feminino from './pages/Feminino'
import Eletronicos from './pages/Eletronicos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
     <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/eletronicos' element={<Eletronicos/>}/>
        <Route exact path='/masculino' element={<Masculino/>}/>
        <Route exact path='/joias' element={<Joias/>}/>
        <Route exact path='/feminino' element={<Feminino/>}/>
      </Routes>
      
    </Router>
     
    </>
  )
}

export default App
