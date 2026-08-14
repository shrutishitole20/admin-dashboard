import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/common/Button';

const UserDetails = ({ userId }) => {
  // Mock data - would come from props or API
  const user = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    role: 'Admin',
    status: 'Active',
    joinDate: '2023-01-15',
    avatar: '/api/placeholder/100/100',
  };

  return (
    <PageContainer>
      <div className="max-w-2xl">
        <Button variant="secondary" size="sm" className="mb-6">
          ← Back
        </Button>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center mb-8">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 rounded-full mr-6"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600">{user.role}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <label className="text-sm font-medium text-gray-500">Email</label>
              <p className="text-gray-900 mt-1">{user.email}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Phone</label>
              <p className="text-gray-900 mt-1">{user.phone}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Status</label>
              <p className="text-gray-900 mt-1">{user.status}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Join Date</label>
              <p className="text-gray-900 mt-1">{user.joinDate}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button variant="primary">Edit User</Button>
            <Button variant="danger">Delete User</Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default UserDetails;
