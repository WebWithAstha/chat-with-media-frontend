// src/pages/Profile.jsx
import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-background text-text">
      <h1 className="text-4xl font-semibold text-primary mt-10">Profile</h1>
      <div className="mt-8 w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-lg">
        <p className="text-lg">Username: <span className="text-primary">User123</span></p>
        <p className="text-lg mt-2">Email: <span className="text-primary">user@example.com</span></p>
        <button className="mt-6 py-2 px-6 rounded bg-primary text-background font-semibold hover:bg-green-500 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
