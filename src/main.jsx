import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import App from './App'
import { WendiContextProvider } from './context/WendiContextProvider'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <WendiContextProvider>
      <App />
    </WendiContextProvider>
  </React.StrictMode>
)
