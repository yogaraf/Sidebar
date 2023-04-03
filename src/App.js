import React from 'react'
import './App.css'
// import Sidebar from './components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import About from './pages/About.jsx'
import Analytics from './pages/Analytics.jsx'
import Comment from './pages/Comment.jsx'
import Product from './pages/Product.jsx'
import ProductList from './pages/ProductList.jsx'
import Sidebar from './components/Sidebar.jsx'

const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path="/" elemet={<Dashboard/>}/>
        <Route path="/about" elemet={<About/>}/>
        <Route path="/analytics" elemet={<Analytics/>}/>
        <Route path="/comment" elemet={<Comment/>}/>
        <Route path="/product" elemet={<Product/>}/>
        <Route path="/productList" elemet={<ProductList/>}/>
      </Routes>
    </Sidebar>
    </BrowserRouter>
  )
}

export default App