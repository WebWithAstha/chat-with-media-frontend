import React from "react";

const Popup = () => (
  <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-t-lg shadow-lg">
    <button className="p-2 bg-gray-500 text-white rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.153a2 2 0 01.986 0H17a2 2 0 012 2v9.646a2 2 0 01-1.354 1.354l-1.414 1.414a2 2 0 01-1.414 0l-1.414-1.414a2 2 0 01.354-1.354V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </button>
    <button className="p-2 bg-gray-500 text-white rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0v-7a7 7 0 017 7z" />
      </svg>
    </button>
  </div>
);

export default Popup;
