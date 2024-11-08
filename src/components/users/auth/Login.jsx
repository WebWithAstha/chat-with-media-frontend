// src/pages/Login.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../../store/actions/authActions';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  });
  const handleChange =(e)=>{
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      dispatch(loginUser(formData))
      navigate('/dashboard')
      
      console.log("logged successfully")
    } catch (error) {
      console.log(error)
      
    }
    
  };

  return (
    <div className="flex h-screen items-center justify-center bg-background text-text">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-primary text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            name='username'
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 rounded bg-background border border-primary text-text focus:outline-none"
            />
          <input
            type="password"
            placeholder="Password"
            name='password'
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 rounded bg-background border border-primary text-text focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-3 mt-4 rounded bg-primary text-background font-semibold hover:bg-emerald-500 transition"
          >
            Sign In
          </button>
          <div className="">New to app ? <Link to={"/register"} className='text-sky-500'>Register</Link></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
