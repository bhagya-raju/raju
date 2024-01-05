import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Report from './Report'

const App = () => {
  return (
    <div>
      <BrowserRouter >
      <Routes>
      <Route path="/" element={<Report />} />
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
