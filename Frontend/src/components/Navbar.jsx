import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-black text-white px-6 py-4 shadow-md">
            <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 animate-gradient-x">
                Chiku
            </div>
            <ul className="flex space-x-6">
                <li>
                    <NavLink
                        to={'/'}
                        className={({ isActive }) =>
                            isActive
                                ? "text-green-400 font-semibold drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                                : "text-white hover:text-pink-400 hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]"
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/about'}
                        className={({ isActive }) =>
                            isActive
                                ? "text-green-400 font-semibold drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                                : "text-white hover:text-pink-400 hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]"
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/contact'}
                        className={({ isActive }) =>
                            isActive
                                ? "text-green-400 font-semibold drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                                : "text-white hover:text-pink-400 hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]"
                        }
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/login'}
                        className={({ isActive }) =>
                            isActive
                                ? "text-green-400 font-semibold drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                                : "text-white hover:text-pink-400 hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]"
                        }
                    >
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/register'}
                        className={({ isActive }) =>
                            isActive
                                ? "text-green-400 font-semibold drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                                : "text-white hover:text-pink-400 hover:drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]"
                        }
                    >
                        Register
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
