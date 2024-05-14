import React, { useState } from 'react';
import Header from './components/code/Header';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import Productos from './components/pages/Productos';

import Register from './components/pages/Register';

function App() {
 

  return (
    <BrowserRouter>
   |<Header/>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/productos' element={<Productos/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>

  )
}
export default App;
