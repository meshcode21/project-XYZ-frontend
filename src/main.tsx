import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import SignUpPage from './pages/SignUpPage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import LandingPage from './pages/LandingPage.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<LandingPage />} /> 
      <Route path="/login" element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Routes>

    <Toaster richColors/>
  </BrowserRouter>,
)
