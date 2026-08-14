import React from 'react';
import PageContainer from '../../components/layout/PageContainer';
import StatCard from '../../components/dashboard/StatCard';
import SalesChart from '../../components/dashboard/SalesChart';
import ActivityCard from '../../components/dashboard/ActivityCard';
import RecentOrders from '../../components/dashboard/RecentOrders';
import TrafficCard from '../../components/dashboard/TrafficCard';
import { dashboardData } from '../../data/dashboardData';

const Dashboard = () => {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardData.stats.map((stat, idx) => (
          <StatCard
            key={idx}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
            trendValue={stat.trendValue}
          />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <SalesChart data={dashboardData.salesData} />
        <TrafficCard data={dashboardData.trafficData} />
      </div>

      {/* Recent Orders and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentOrders />
        </div>
        <ActivityCard title="Recent Activity" />
      </div>
    </PageContainer>
  );
};

export default Dashboard;
