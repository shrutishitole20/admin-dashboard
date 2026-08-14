import React from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import MobileSidebar from '../components/layout/MobileSidebar';
import { SidebarProvider, useSidebar } from '../context/SidebarContext';

const AdminLayoutContent = ({ children }) => {
  const { isOpen, isMobileOpen, closeMobileSidebar } = useSidebar();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <Sidebar isOpen={isOpen} />
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isMobileOpen} onClose={closeMobileSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

const AdminLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </SidebarProvider>
  );
};

export default AdminLayout;
