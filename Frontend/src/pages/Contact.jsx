import React, { useState } from 'react';

const Contact = () => {
  const[contactData,setContactData] = useState({
    username:"",
    email:"",
    message:""
  })

  const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setContactData({
      ...contactData,
      [name]:value,
    })
  }
 const handleSubmit = (e)=>{
  e.preventDefault()
  console.log(contactData);

  setContactData({
    username:"",
    email:"",
    message:""
  })
 }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Contact Us</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              value={contactData.username}
              onChange={handleInput}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              value={contactData.email}
              onChange={handleInput}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows="4"
              name="message"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              value={contactData.message}
              onChange={handleInput}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
