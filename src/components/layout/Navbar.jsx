import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSidebar } from '../../context/SidebarContext';

const Navbar = ({ className = '' }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { toggleSidebar, toggleMobileSidebar } = useSidebar();

  return (
    <nav className={`bg-white shadow-md ${className}`}>
      <div className="px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="hidden md:flex p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors"
            title="Toggle Sidebar"
          >
            ☰
          </button>
          <button
            onClick={toggleMobileSidebar}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors"
            title="Toggle Mobile Sidebar"
          >
            ☰
          </button>
          <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600" title="Notifications">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 1118 14.158V11m0 0V7m0 4h.01" />
            </svg>
          </button>
          
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#38bdf8] text-white font-bold flex items-center justify-center text-sm shadow">
                A
              </div>
              <span className="text-sm font-medium text-gray-700">Admin</span>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                <Link
                  to="/profile"
                  onClick={() => setIsDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  onClick={() => setIsDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <hr className="my-2 border-gray-100" />
                <Link
                  to="/"
                  onClick={() => setIsDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
