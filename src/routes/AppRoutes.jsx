import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SidebarProvider } from '../context/SidebarContext';
import { NotificationProvider } from '../context/NotificationContext';
import { ThemeProvider } from '../context/ThemeContext';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Users from '../pages/Users/Users';
import UserDetails from '../pages/Users/UserDetails';
import AddUser from '../pages/Users/AddUser';
import Orders from '../pages/Orders/Orders';
import Products from '../pages/Products/Products';
import AddProduct from '../pages/Products/AddProduct';
import Analytics from '../pages/Analytics/Analytics';
import Calendar from '../pages/Calendar/Calendar';
import Profile from '../pages/Profile/Profile';
import Settings from '../pages/Settings/Settings';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import PasswordReset from '../pages/Auth/PasswordReset';
import TermsAndConditions from '../pages/Auth/TermsAndConditions';
import PrivacyPolicy from '../pages/Auth/PrivacyPolicy';
import AcornShowcase from '../pages/AcornShowcase';

const AppRoutes = () => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <SidebarProvider>
          <Router>
            <Routes>
              {/* Landing Page */}
              <Route path="/" element={<AcornShowcase />} />

              {/* Auth Routes */}
              <Route path="/auth/sign-in" element={<SignIn />} />
              <Route path="/auth/sign-up" element={<SignUp />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/auth/login" element={<SignIn />} />
              <Route path="/auth/register" element={<SignUp />} />
              <Route path="/auth/password-reset" element={<PasswordReset />} />
              <Route path="/auth/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/auth/privacy-policy" element={<PrivacyPolicy />} />

              {/* Admin Routes - Rendered within AdminLayout */}
              <Route
                path="/dashboard"
                element={
                  <AdminLayout>
                    <Dashboard />
                  </AdminLayout>
                }
              />
              <Route
                path="/users"
                element={
                  <AdminLayout>
                    <Users />
                  </AdminLayout>
                }
              />
              <Route
                path="/users/add"
                element={
                  <AdminLayout>
                    <AddUser />
                  </AdminLayout>
                }
              />
              <Route
                path="/users/:id"
                element={
                  <AdminLayout>
                    <UserDetails />
                  </AdminLayout>
                }
              />
              <Route
                path="/orders"
                element={
                  <AdminLayout>
                    <Orders />
                  </AdminLayout>
                }
              />
              <Route
                path="/products"
                element={
                  <AdminLayout>
                    <Products />
                  </AdminLayout>
                }
              />
              <Route
                path="/products/add"
                element={
                  <AdminLayout>
                    <AddProduct />
                  </AdminLayout>
                }
              />
              <Route
                path="/analytics"
                element={
                  <AdminLayout>
                    <Analytics />
                  </AdminLayout>
                }
              />
              <Route
                path="/calendar"
                element={
                  <AdminLayout>
                    <Calendar />
                  </AdminLayout>
                }
              />
              <Route
                path="/profile"
                element={
                  <AdminLayout>
                    <Profile />
                  </AdminLayout>
                }
              />
              <Route
                path="/settings"
                element={
                  <AdminLayout>
                    <Settings />
                  </AdminLayout>
                }
              />

              {/* Subpath redirections if /dashboard/users etc are hit */}
              <Route path="/dashboard/users" element={<Navigate to="/users" replace />} />
              <Route path="/dashboard/orders" element={<Navigate to="/orders" replace />} />
              <Route path="/dashboard/products" element={<Navigate to="/products" replace />} />
              <Route path="/dashboard/analytics" element={<Navigate to="/analytics" replace />} />
              <Route path="/dashboard/calendar" element={<Navigate to="/calendar" replace />} />
              <Route path="/dashboard/profile" element={<Navigate to="/profile" replace />} />
              <Route path="/dashboard/settings" element={<Navigate to="/settings" replace />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </SidebarProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default AppRoutes;
