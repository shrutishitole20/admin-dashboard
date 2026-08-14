import React from 'react';
import Badge from '../common/Badge';

const RecentOrders = ({ orders = [], className = '' }) => {
  const defaultOrders = [
    { id: 1, customer: 'John Doe', amount: '$150.00', status: 'Completed', date: '2024-01-15' },
    { id: 2, customer: 'Jane Smith', amount: '$225.50', status: 'Pending', date: '2024-01-14' },
    { id: 3, customer: 'Mike Johnson', amount: '$89.99', status: 'Shipped', date: '2024-01-13' },
    { id: 4, customer: 'Sarah Williams', amount: '$350.00', status: 'Completed', date: '2024-01-12' },
  ];

  const getStatusVariant = (status) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'Pending': return 'warning';
      case 'Shipped': return 'primary';
      default: return 'secondary';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Orders</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 text-gray-600 font-medium">Customer</th>
              <th className="text-left py-2 text-gray-600 font-medium">Amount</th>
              <th className="text-left py-2 text-gray-600 font-medium">Status</th>
              <th className="text-left py-2 text-gray-600 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {(orders.length > 0 ? orders : defaultOrders).map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="py-3 text-gray-900">{order.customer}</td>
                <td className="py-3 text-gray-900 font-medium">{order.amount}</td>
                <td className="py-3">
                  <Badge variant={getStatusVariant(order.status)}>{order.status}</Badge>
                </td>
                <td className="py-3 text-gray-500">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
