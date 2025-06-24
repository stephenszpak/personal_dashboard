import React, { useState, createContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import TopNavBar from './components/TopNavBar';
import { WeatherProvider } from './contexts/WeatherContext';

export const AuthContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <WeatherProvider>
        <TopNavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={user ? <DashboardPage /> : <Navigate to="/login" />} />
        </Routes>
      </WeatherProvider>
    </AuthContext.Provider>
  );
}

export default App;
