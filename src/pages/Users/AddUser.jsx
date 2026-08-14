import React, { useState } from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Input from '../../components/forms/Input';
import Select from '../../components/forms/Select';
import FormField from '../../components/forms/FormField';
import Button from '../../components/common/Button';

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'user',
    status: 'active',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation and submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <PageContainer>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Add New User</h1>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          <FormField label="Full Name" required className="mb-6">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              error={errors.name}
            />
          </FormField>

          <FormField label="Email Address" required className="mb-6">
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              error={errors.email}
            />
          </FormField>

          <FormField label="Role" required className="mb-6">
            <Select
              name="role"
              value={formData.role}
              onChange={handleChange}
              options={[
                { label: 'User', value: 'user' },
                { label: 'Moderator', value: 'moderator' },
                { label: 'Admin', value: 'admin' },
              ]}
              error={errors.role}
            />
          </FormField>

          <FormField label="Status" required className="mb-8">
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={[
                { label: 'Active', value: 'active' },
                { label: 'Inactive', value: 'inactive' },
              ]}
              error={errors.status}
            />
          </FormField>

          <div className="flex gap-4">
            <Button type="submit" variant="primary" size="md">
              Create User
            </Button>
            <Button type="button" variant="secondary" size="md">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </PageContainer>
  );
};

export default AddUser;
