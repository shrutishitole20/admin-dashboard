import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileSidebar = ({ isOpen, onClose }) => {
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
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="fixed inset-y-0 left-0 w-64 bg-gray-800 text-white overflow-y-auto z-50 shadow-2xl">
        <div className="p-6 flex justify-between items-center border-b border-gray-700">
          <Link to="/dashboard" onClick={onClose} className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-[#38bdf8]">⊙</span> Acorn
          </Link>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">×</button>
        </div>
        
        <nav className="mt-6 space-y-1 px-3">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + '/');

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
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
    </div>
  );
};

export default MobileSidebar;
