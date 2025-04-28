import React from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../store/Auth'

const AdminLayouts = () => {
const {user,isLoading} = useAuth()

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (!user.isAdmin) {
    return <Navigate to="/" />
  }
  return (
    <div className="admin-layout">
      {/* Admin Navigation */}
      <ul className="flex space-x-6 p-4 bg-gray-800">
        <li>
          <NavLink
            to={'/admin/users'}
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                : "text-white hover:text-pink-400 hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]"
            }
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/admin/contacts'}
            className={({ isActive }) =>
              isActive
                ? "text-green-400 font-semibold drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                : "text-white hover:text-pink-400 hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]"
            }
          >
            Contacts
          </NavLink>
        </li>
      </ul>

      {/* Content area for nested routes:where you can see component datas in ui */}
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayouts