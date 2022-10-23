import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Main from './components/Main'
import Welcome from './components/Welcome'


export default function App(){
   
    return (
      <div className="app">
        <Routes>
          <Route path='/main' element={<Main/>}/>
          <Route path='/' element={<Welcome/>}/>
        </Routes>
      </div>
    )
  } 