import React, { useState } from 'react';

const Register = () => {
    const[user,setUser] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    })

    const handleInput=(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setUser({
            ...user,
            [name]:value,
           })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(user);

        setUser({
            username:"",
            email:"",
            phone:"",
            password:""
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Register</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Username</label>
                        <input
                            type="text"
                            name='username'
                            placeholder="Enter username"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                            value={user.username}
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Enter email"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                            value={user.email}
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Phone</label>
                        <input
                            type="number"
                            name='phone'
                            placeholder="Enter phone number"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                            value={user.phone}
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Password</label>
                        <input
                            type="password"
                            name='password'
                            placeholder="Enter password"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                            value={user.password}
                            onChange={handleInput}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition duration-300"
                    >
                        Register Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
