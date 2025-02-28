import { StrictMode } from 'react'
import { BrowserRouter } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './router/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
)
