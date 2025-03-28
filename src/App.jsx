import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AddUser from './components/AddUser'
import { Routes, BrowserRouter, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/add" element={<AddUser/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
