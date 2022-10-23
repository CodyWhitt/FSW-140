import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Main from './components/Main'


export default function App(){
   
    return (
      <div className="app">
        <Routes>
            <Route
                path='/'
                element={<Main/>}
            />
        </Routes>
      </div>
    )
  } 