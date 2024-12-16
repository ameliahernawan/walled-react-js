import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import TransferPage from './TransferPage.jsx';
import TopupPage from './TopupPage.jsx';
import RegisterPage from './RegisterPage.jsx';
import App from './App.jsx';
import HeroComponent from './HeroComponent.jsx';
import AccountStatComponent from './AccountStatComponent.jsx';
import Login from './Login.jsx';
import { AuthProvider } from './AuthContext.jsx';
import ProtectedRoute from './ProtextedRoute.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<App />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/topup" element={<TopupPage />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        {/* <ProtectedRoute />   */}
      </AuthProvider>
    </BrowserRouter>
  </>
);
