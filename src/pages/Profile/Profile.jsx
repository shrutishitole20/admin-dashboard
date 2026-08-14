import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/common/Button';

const Profile = () => {
  const profile = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Administrator',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Full-time administrator managing the system',
    avatar: '/api/placeholder/150/150',
  };

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-1">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-full rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
          <p className="text-gray-600">{profile.role}</p>
          <Button variant="primary" size="md" className="w-full mt-4">
            Edit Profile
          </Button>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Email</label>
                <p className="text-gray-900 mt-1">{profile.email}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Phone</label>
                <p className="text-gray-900 mt-1">{profile.phone}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Location</label>
                <p className="text-gray-900 mt-1">{profile.location}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Bio</label>
                <p className="text-gray-900 mt-1">{profile.bio}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Account Settings</h3>
            <div className="space-y-4">
              <Button variant="secondary" size="md" className="w-full">
                Change Password
              </Button>
              <Button variant="secondary" size="md" className="w-full">
                Two-Factor Authentication
              </Button>
              <Button variant="danger" size="md" className="w-full">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Profile;
