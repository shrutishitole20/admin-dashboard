import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen = true, className = '' }) => {
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', icon: '📊', path: '/dashboard' },
    { label: 'Users', icon: '👥', path: '/users' },
    { label: 'Orders', icon: '📦', path: '/orders' },
    { label: 'Products', icon: '🛍️', path: '/products' },
    { label: 'Analytics', icon: '📈', path: '/analytics' },
    { label: 'Calendar', icon: '📅', path: '/calendar' },
    { label: 'Settings', icon: '⚙️', path: '/settings' },
  ];

  if (!isOpen) return null;

  return (
    <div className={`w-64 bg-gray-800 text-white h-screen overflow-y-auto ${className}`}>
      <div className="p-6 border-b border-gray-700 flex items-center justify-between">
        <Link to="/dashboard" className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-[#38bdf8]">⊙</span> Acorn Admin
        </Link>
      </div>
      
      <nav className="mt-6 space-y-1 px-3">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                isActive
                  ? 'bg-gray-700 text-white font-bold border-l-4 border-[#38bdf8] shadow-md'
                  : 'text-gray-300 hover:bg-gray-700/60 hover:text-white'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
