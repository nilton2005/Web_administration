import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { IndexPage } from './pages/IndexPage';
import './App.css'
import { ProductsPage } from './pages/ProductsPage';
import { Navigation } from './components/Navigation';
//import {AnaliticsPage} from './pages/AnaliticsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="/productos" element={<ProductsPage/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
