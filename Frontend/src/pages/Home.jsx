import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-x text-center">
        Welcome Chiku to Home Page
      </h1>

      <p className="mt-6 text-lg text-gray-400 italic">You’re in the right place 🎉</p>
    </div>
  );
};

export default Home;
