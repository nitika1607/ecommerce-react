// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Containers from './components/Containers'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopCollection from "./pages/ShopCollection";
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div>
          <Header></Header>
          <Containers></Containers>
          <Footer />
          
      </div>
    </>
  )
}

export default App
