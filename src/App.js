import './App.css'
import React from 'react'

import Home from './Pages/Home';
import {Routes, Route} from 'react-router-dom'
import Contact from './Pages/Contact'




function App() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}></Route> 
    <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    
    
  );
}

export default App;
