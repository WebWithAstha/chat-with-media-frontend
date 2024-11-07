// src/pages/RegisterPage.jsx
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { signupUser } from '../store/actions/authActions';
import { useDispatch } from 'react-redux';

const RegisterPage = () => {
  const dispatch = useDispatch(); // Get the dispatch function from the store
  
const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signupUser(formData)); // Dispatch the signup action
    navigate('/dashboard'); // Navigate to dashboard after signup
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-zinc-800 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-emerald-400">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-zinc-300">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-zinc-100 bg-zinc-700 border border-zinc-600 rounded-xl focus:outline-none focus:border-emtext-emerald-400"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-zinc-100 bg-zinc-700 border border-zinc-600 rounded-xl focus:outline-none focus:border-emtext-emerald-400"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-300">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-zinc-100 bg-zinc-700 border border-zinc-600 rounded-xl focus:outline-none focus:border-emtext-emerald-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-zinc-900 bg-emtext-emerald-400 rounded-xl hover:bg-emerald-500 bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emtext-emerald-500 focus:ring-opacity-50"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
