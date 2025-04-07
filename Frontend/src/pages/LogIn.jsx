import React, { useState } from 'react';

const LogIn = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginData)

        // Clear the form fields by resetting the state
        setLoginData({
            email: "",
            password: ""
        });
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Log In</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Enter email"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                            value={loginData.email}
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
                            value={loginData.password}
                            onChange={handleInput}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition duration-300"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LogIn;
