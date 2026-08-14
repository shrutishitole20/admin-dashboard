import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TrafficCard = ({ data = [], className = '' }) => {
  const defaultData = [
    { day: 'Mon', views: 4000, users: 2400 },
    { day: 'Tue', views: 3000, users: 1398 },
    { day: 'Wed', views: 2000, users: 9800 },
    { day: 'Thu', views: 2780, users: 3908 },
    { day: 'Fri', views: 1890, users: 4800 },
    { day: 'Sat', views: 2390, users: 3800 },
  ];

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-bold text-gray-900 mb-4">Website Traffic</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data.length > 0 ? data : defaultData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="views" fill="#3b82f6" />
          <Bar dataKey="users" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrafficCard;
