// src/pages/Dashboard.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../../store/actions/authActions';
import UserList from './users/UserList';
import Logout from '../../logout/Logout';

const Dashboard = () => {

  const {user} = useSelector(store=>store.authReducer)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUser());
  },[])

  return (
    user &&
    <div className="flex flex-col items-center h-screen bg-background text-text">
      <h1 className="text-4xl font-semibold text-primary mt-10">Dashboard</h1>
      <h2 className='mt-4'>Hello, {user.username}</h2>
      <Logout/>
      <p className="mt-4 text-xl">Welcome to your dashboard!</p>
        <UserList/>
    </div>
  );
};

export default Dashboard;
