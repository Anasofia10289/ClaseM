import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home'
import Login from './views/Login'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />

  </StrictMode>,
)
