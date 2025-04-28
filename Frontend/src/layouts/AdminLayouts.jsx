import React from 'react'
import { Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../store/Auth'
import { toast } from 'react-toastify';

const AdminLayouts = () => {
  const { user, isLoading, logoutUser } = useAuth();
  const navigate = useNavigate();

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">
      <p>Loading...</p>
    </div>
  }

  if (!user?.isAdmin) {
    return <Navigate to="/" replace />
  }

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate('/login', { replace: true }); // Redirect after logout
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Admin Navigation */}
      <header className="bg-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex space-x-6 py-4">
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
            <li>
              <button
                onClick={handleLogout}
                className="text-white hover:text-red-400 hover:drop-shadow-[0_0_6px_rgba(239,68,68,0.6)]"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Content area */}
      <main className="flex-grow p-4 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>

      {/* Optional admin footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto text-center">
          Admin Panel © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}

export default AdminLayouts