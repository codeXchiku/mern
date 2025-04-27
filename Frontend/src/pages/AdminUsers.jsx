import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../store/Auth'
import { MdOutlineEdit } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import {toast} from 'react-toastify'
import {Link} from 'react-router-dom'


const AdminUsers = () => {
  const [usersData, setUsersData] = useState([])
  const { authorizationToken } = useAuth();

  const getUsersData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/admin/users", {
        headers: {
          "Authorization": authorizationToken,
        },
      });
      setUsersData(response.data)
    } catch (error) {
      console.log("user data not found: ", error);
    }
  }

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/admin/users/delete/${id}`, {
        headers: {
          "Authorization": authorizationToken,
        },
      });
      if (res.status == 200) {
        toast.success(res.data.message);
        getUsersData();
      }
    } catch (error) {
      toast.error("Error deleting user");
    }
  }

  useEffect(() => {
    getUsersData()
  }, [])

  return (
    <div className="p-4">
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-gray-100">
        <th className="p-3 border text-center">Name</th>
        <th className="p-3 border text-center">Email</th>
        <th className="p-3 border text-center">Phone</th>
        <th className="p-3 border text-center">Update</th>
        <th className="p-3 border text-center">Remove</th>
      </tr>
    </thead>
    <tbody>
      {usersData.map((user) => (
        <tr key={user._id} className="hover:bg-gray-50">
          <td className="p-3 border text-center">{user.username}</td>
          <td className="p-3 border text-center">{user.email}</td>
          <td className="p-3 border text-center">{user.phone}</td>

          <td className="p-3 border text-center">
            <Link
            to={`/admin/users/${user._id}/edit`}
              className="w-fit bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded flex items-center gap-1 justify-center mx-auto"
            >
              <MdOutlineEdit />
              <span>Edit</span>
            </Link>
          </td>

          <td className="p-3 border text-center">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1 justify-center mx-auto"
              onClick={()=>deleteUser(user._id)}
            >
              <GoTrash />
              <span>Delete</span>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default AdminUsers