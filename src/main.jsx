import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { TransactionProvider } from './context/TransactionContext'
import UserLogedin from './context/UserLogedin.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserLogedin>
    <TransactionProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TransactionProvider>
    </UserLogedin>
  </React.StrictMode>,
)