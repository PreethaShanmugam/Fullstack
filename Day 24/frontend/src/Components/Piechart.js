import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import './Piechart.css'; // Import the CSS file

const data = [
  { name: 'A', value: 30 },
  { name: 'B', value: 25 },
  { name: 'C', value: 20 },
  { name: 'D', value: 15 },
  { name: 'O', value: 10 }, // Adding the "O" grade
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8']; // Define colors for each grade, including "O"

const Piechart = () => {
  return (
    <div className="student-grades-pie-chart">
      <h2 className="chart-title">Student Grades Distribution</h2>
      <PieChart width={400} height={500}>
        <Pie
          dataKey="value"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={140}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Piechart;
