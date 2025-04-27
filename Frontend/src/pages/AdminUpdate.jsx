import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../store/Auth'
import { toast } from 'react-toastify'

const AdminUpdate = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: ''
    });

    const { authorizationToken } = useAuth()
    const { id } = useParams()

    const getUserData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/admin/users/${id}`, {
                headers: {
                    "Authorization": authorizationToken,
                },
            })
            setFormData({
                username: response.data.username,
                email: response.data.email,
                phone: response.data.phone
            })

        } catch (error) {
            console.log("user data not found: ", error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.patch(`http://localhost:3000/api/admin/users/update/${id}`, formData, {
                headers: {
                    "Authorization": authorizationToken,
                },
            })

            if (res.status == 200) {
                toast.success("data updated successfully")
                await getUserData();
            }
        } catch (error) {
            toast.error("updatation failed");
            
        }
    };

    useEffect(() => {
        if (authorizationToken) {
            getUserData();
        }
    }, [id, authorizationToken]);

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Admin Information</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone
                        </label>
                        <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminUpdate