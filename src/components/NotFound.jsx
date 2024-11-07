// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-background text-text">
      <h1 className="text-5xl font-bold text-primary mt-10">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <Link
        to="/"
        className="mt-6 py-2 px-4 bg-primary text-background font-semibold rounded hover:bg-green-500 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
