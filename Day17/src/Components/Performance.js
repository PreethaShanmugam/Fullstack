import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import './Performance.css'; // Import the CSS file
import Piechart from './Piechart';
import Admin from './Admin';

const Dashboard = () => {
  const data = [
    { department: 'CSE', passPercentage: 85 },
    { department: 'IT', passPercentage: 92 },
    { department: 'ECE', passPercentage: 78 },
    { department: 'EEE', passPercentage: 88 },
    { department: 'AIDS', passPercentage: 70 },
    { department: 'ICE', passPercentage: 95 },
  ];

  return (
    <div>
    <div><Admin/></div>
    <div className="department-pass-percentage">
      <h1 className="charttitle">Department-wise Pass Percentage</h1>
      <div className="chart-container">
        <BarChart
          width={600}
          height={400}
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="passPercentage" fill="#8884d8" />
        </BarChart>
      </div>
      <Piechart></Piechart>
    </div></div>
  );
};

export default Dashboard;
