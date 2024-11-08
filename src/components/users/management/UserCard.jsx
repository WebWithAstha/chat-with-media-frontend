// src/components/UserCard.js
import React from 'react';

const UserCard = ({ user }) => {


  return (
    <div className="bg-zinc-800 text-white p-4 mb-2 rounded-lg shadow-lg">
      <div className="flex items-center">
        <img
          src={user.profilePicture || 'https://images.unsplash.com/photo-1648740366598-7fb7c5e73fa5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          alt={`${user.username}'s profile`}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{user.username}</h3>
          <p className="text-sm text-zinc-400">Last seen: {user.lastSeen || 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
