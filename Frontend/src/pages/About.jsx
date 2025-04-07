import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 animate-gradient-x text-center">
        About Chiku
      </h1>

      <p className="mt-6 text-lg text-gray-400 italic">Let’s explore who Chiku really is! 💫</p>
    </div>
  );
};

export default About;
