import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { FaGlobe, FaTwitter, FaTelegram, FaDiscord, FaClock } from 'react-icons/fa';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function ChartSection() {
  const [timeframe, setTimeframe] = useState('1D');

  // Generate more detailed price data
  const generatePriceData = () => {
    const data = [];
    let price = 1000;
    for (let i = 0; i < 100; i++) {
      price += Math.random() * 100 - 50;
      data.push(price);
    }
    return data;
  };

  const chartData = {
    labels: Array.from({ length: 100 }, (_, i) => i),
    datasets: [
      {
        label: 'Price',
        data: generatePriceData(),
        borderColor: '#ff4400',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
        backgroundColor: 'rgba(255, 68, 0, 0.1)',
        pointRadius: 0,
        pointHoverRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 68, 0, 0.2)',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(255, 68, 0, 0.1)',
        },
        ticks: {
          callback: (value) => `$${value.toLocaleString()}`,
          color: 'rgba(255, 255, 255, 0.5)',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'index',
      intersect: false,
    },
  };

  const timeframes = ['1H', '1D', '1W', '1M', '1Y'];
  const metrics = [
    { label: 'Market Cap', value: '134.4M', change: '+5.2%' },
    { label: 'Volume (24h)', value: '24.6M', change: '+12.3%' },
    { label: 'Liquidity', value: '12.8M', change: '+3.1%' }
  ];

  return (
    <div className="w-full lg:w-3/5">
      <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
        {/* Header with Social Links */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <button className="text-white bg-orange-500 px-4 py-2 rounded-lg">Chart</button>
            <button className="text-gray-400 hover:text-white px-4 py-2">Info</button>
          </div>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors"><FaGlobe /></a>
            <a href="#" className="hover:text-white transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition-colors"><FaTelegram /></a>
            <a href="#" className="hover:text-white transition-colors"><FaDiscord /></a>
          </div>
        </div>

        {/* Price Header */}
        <div className="mb-6">
          <div className="flex items-baseline gap-3">
            <h2 className="text-3xl font-bold">$2,235.12</h2>
            <span className="text-green-500">+5.23%</span>
          </div>
          <div className="text-gray-400 text-sm">
            Dec 18, 2023, 14:30 UTC
          </div>
        </div>

        {/* Timeframe Selector */}
        <div className="flex gap-2 mb-4">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1 rounded-lg text-sm flex items-center gap-1 ${
                timeframe === tf
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <FaClock className="text-xs" />
              {tf}
            </button>
          ))}
        </div>

        {/* Chart */}
        <div className="h-[400px] mb-6">
          <Line data={chartData} options={chartOptions} />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-gray-400 text-sm">{metric.label}</div>
              <div className="text-xl font-semibold">${metric.value}</div>
              <div className="text-green-500 text-sm">{metric.change}</div>
            </div>
          ))}
        </div>

        {/* Recent Trades Table */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Recent Trades</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 text-sm">
                  <th className="text-left pb-2">Time</th>
                  <th className="text-right pb-2">Type</th>
                  <th className="text-right pb-2">Price</th>
                  <th className="text-right pb-2">Amount</th>
                  <th className="text-right pb-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { time: '14:30:15', type: 'Buy', price: '$2,235.12', amount: '1.2 ETH', total: '$2,682.14' },
                  { time: '14:29:45', type: 'Sell', price: '$2,234.85', amount: '0.5 ETH', total: '$1,117.43' },
                  { time: '14:28:30', type: 'Buy', price: '$2,234.50', amount: '2.0 ETH', total: '$4,469.00' },
                ].map((trade, index) => (
                  <tr key={index} className="border-t border-gray-800">
                    <td className="py-3">{trade.time}</td>
                    <td className={`text-right ${trade.type === 'Buy' ? 'text-green-500' : 'text-red-500'}`}>
                      {trade.type}
                    </td>
                    <td className="text-right">{trade.price}</td>
                    <td className="text-right">{trade.amount}</td>
                    <td className="text-right">{trade.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartSection;
