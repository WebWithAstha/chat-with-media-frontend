// src/pages/Dashboard.jsx
import React from 'react';
import UserList from '../management/UserList';
import Logout from '../../logout/Logout';
import useFetchUser from '../../../hooks/useFetchUser';

const Dashboard = () => {

  const user = useFetchUser();

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
