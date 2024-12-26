import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToggleModalProvider } from './contexts/ToggleContext/ToggleModal.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToggleModalProvider>
        <App />
    </ToggleModalProvider>
  </StrictMode>,
)
