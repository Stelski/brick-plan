import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import { Pages } from '@/pages'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Pages />
  </StrictMode>,
)
