import React from 'react';

const ActivityCard = ({ title, activities = [], className = '' }) => {
  const defaultActivities = [
    { id: 1, user: 'John Doe', action: 'Added new product', time: '2 hours ago' },
    { id: 2, user: 'Jane Smith', action: 'Updated profile', time: '4 hours ago' },
    { id: 3, user: 'Mike Johnson', action: 'Completed order', time: '6 hours ago' },
  ];

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title || 'Recent Activity'}</h3>
      <div className="space-y-4">
        {(activities.length > 0 ? activities : defaultActivities).map((activity) => (
          <div key={activity.id} className="flex items-center justify-between py-3 border-b last:border-b-0">
            <div>
              <p className="text-sm font-medium text-gray-900">{activity.user}</p>
              <p className="text-xs text-gray-500">{activity.action}</p>
            </div>
            <span className="text-xs text-gray-400">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityCard;
