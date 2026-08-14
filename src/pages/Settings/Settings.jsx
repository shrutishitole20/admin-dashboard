import React, { useState } from 'react';
import PageContainer from '../../components/layout/PageContainer';
import Input from '../../components/forms/Input';
import Select from '../../components/forms/Select';
import Button from '../../components/common/Button';

const Settings = () => {
  const [settings, setSettings] = useState({
    siteName: 'Admin Dashboard',
    siteUrl: 'https://example.com',
    adminEmail: 'admin@example.com',
    theme: 'light',
    language: 'en',
    timezone: 'UTC',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Settings saved:', settings);
  };

  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

      <div className="max-w-3xl">
        <form onSubmit={handleSave} className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">General Settings</h2>

          <div className="space-y-6 mb-8">
            <Input
              label="Site Name"
              name="siteName"
              value={settings.siteName}
              onChange={handleChange}
            />

            <Input
              label="Site URL"
              name="siteUrl"
              type="url"
              value={settings.siteUrl}
              onChange={handleChange}
            />

            <Input
              label="Admin Email"
              name="adminEmail"
              type="email"
              value={settings.adminEmail}
              onChange={handleChange}
            />
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-6">Preferences</h2>

          <div className="space-y-6 mb-8">
            <Select
              label="Theme"
              name="theme"
              value={settings.theme}
              onChange={handleChange}
              options={[
                { label: 'Light', value: 'light' },
                { label: 'Dark', value: 'dark' },
                { label: 'Auto', value: 'auto' },
              ]}
            />

            <Select
              label="Language"
              name="language"
              value={settings.language}
              onChange={handleChange}
              options={[
                { label: 'English', value: 'en' },
                { label: 'Spanish', value: 'es' },
                { label: 'French', value: 'fr' },
                { label: 'German', value: 'de' },
              ]}
            />

            <Select
              label="Timezone"
              name="timezone"
              value={settings.timezone}
              onChange={handleChange}
              options={[
                { label: 'UTC', value: 'UTC' },
                { label: 'EST', value: 'EST' },
                { label: 'CST', value: 'CST' },
                { label: 'PST', value: 'PST' },
              ]}
            />
          </div>

          <div className="flex gap-4">
            <Button type="submit" variant="primary" size="md">
              Save Settings
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

export default Settings;
