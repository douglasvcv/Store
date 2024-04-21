import { useState } from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

import './App.css'
import Navbar from './components/layouts/Navbar'
import Home from './pages/Home'
import Celulares from './pages/Celulares'
import Carregadores from './pages/Carregadores'
import Acessorios from './pages/Acessorios'
import Fones from './pages/Fones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
     <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/celular' element={<Celulares/>}/>
        <Route exact path='/acessorios' element={<Acessorios/>}/>
        <Route exact path='/fones' element={<Fones/>}/>
        <Route exact path='/carregadores' element={<Carregadores/>}/>
      </Routes>
      
    </Router>
     
    </>
  )
}

export default App
