// src/AppRoutes.jsx
import React from 'react';
// import { BrowserRouter as Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../components/users/dashboard/Dashboard';
import Profile from '../components/users/management/Profile';
import NotFound from '../components/NotFound';
import RegisterPage from '../components/Register';
import { Route, Routes } from 'react-router-dom';
import ChatBoard from '../components/ChatBoard';


const isAuthenticated = () => localStorage.getItem('accessToken') !== null;

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/chat" element={<ChatBoard/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default AppRoutes;
