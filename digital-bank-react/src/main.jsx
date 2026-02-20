import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/base.css'
import './assets/styles/variables.css'
import './assets/styles/layout.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
