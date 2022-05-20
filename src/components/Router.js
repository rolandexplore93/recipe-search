import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Recipe from './Recipe'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}></Route>
            <Route path='/recipe/:id' element={<Recipe />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router