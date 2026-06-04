import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FranchiseLandingPage from './pages/FranchiseLandingPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FranchiseLandingPage />
  </StrictMode>,
)
