import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/Auth';

const About = () => {
  const[name,setName] = useState("")
  const {user} = useAuth();

  useEffect(()=>{
    if(user){
      setName(user.username)
    }
  },[user])


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 animate-gradient-x text-center">
        About {user?`${name}`:""}
      </h1>

      <p className="mt-6 text-lg text-gray-400 italic">Let’s explore who {user?`${name}`:""} really is! 💫</p>
    </div>
  );
};

export default About;
