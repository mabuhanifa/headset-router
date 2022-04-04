import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Rechart.css';

const Rechart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='chart'>
            <div className='line'>
            <h2>
                Total sales over time
            </h2>
    <LineChart width={600} height={400} data={data}> 
    <CartesianGrid strokeDasharray="3 3" />
        <Line dataKey={'sell'} ></Line>
        <XAxis dataKey={'month'}></XAxis>
        <YAxis  ></YAxis>
        <Tooltip></Tooltip>
    </LineChart>  
    </div>
<div>


<h2>
    Investment Vs Revenue
</h2>
    <BarChart
          width={600}
          height={450}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" stackId="a" fill="#8884d8" />
          <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
        </BarChart>
        <Tooltip></Tooltip>

        </div>
        </div>
    );
};

export default Rechart;