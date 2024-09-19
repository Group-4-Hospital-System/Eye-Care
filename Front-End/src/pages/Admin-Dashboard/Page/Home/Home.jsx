import React from 'react';
import Sidebar from '../../components/Sidebar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 200 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 200 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 222 },
  { name: 'July', value: 520 },
  { name: 'August', value: 300 },
  { name: 'September', value: 483 },

];
const statistics = [
    { title: 'Total Users', value: '1,234', color: 'bg-[#1f7b6f]' },
    { title: 'Revenue', value: '$5,678', color: 'bg-[#232323]' },
    { title: 'Orders', value: '256', color: 'bg-[#1f7b6f]' },
    { title: 'Visits', value: '10,123', color: 'bg-[#232323]' },
  ]
const Dashboard = () => (
  <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
    <Sidebar />
    <div className="flex-1 p-8 md:ml-64">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statistics.map((item, index) => (
          <div key={index} className={`${item.color} text-white p-4 rounded shadow`}>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-2xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Sales Analysis</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#1f7b6f" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default Dashboard;