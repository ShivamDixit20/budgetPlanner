import React from 'react';

import './App.css'

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { Routes } from 'react-router-dom'

import { Route } from 'react-router-dom'
import Navigation from './components/Navigation';
import AddExpense from './components/AddExpence';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-expense' element={<AddExpense />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer/>
    </>

  )
}

export default App
