import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      {/* Animated Gradient 404 using Tailwind & custom keyframes */}
      <h1 className="text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x">
        404
      </h1>

      <p className="text-2xl mt-2 font-semibold">Oops! Page not found.</p>
      <p className="text-md mt-3 italic text-gray-400">
        We’ll return very soon 🚧
      </p>

      {/* Pulsing Button */}
      <button
        onClick={() => navigate('/')}
        className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold shadow-lg hover:opacity-90 transition duration-300 animate-pulse"
      >
        Go Home
      </button>
    </div>
  );
};

export default Error;
