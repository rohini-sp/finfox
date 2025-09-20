import React, { useState } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
} from 'chart.js';
import { 
  FaWallet, 
  FaHistory, 
  FaCog, 
  FaChartLine, 
  FaChartBar, 
  FaBell, 
  FaExchangeAlt, 
  FaLock,
  FaSearch,
  FaFilter,
  FaSort,
  FaBitcoin,
  FaEthereum
} from 'react-icons/fa';
import useStore from '../store/useStore';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

function Dashboard() {
  const { dashboardView, setDashboardView } = useStore();
  const [assetFilter, setAssetFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('value');

  const assets = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      icon: <FaBitcoin className="text-orange-500" />,
      balance: '0.45',
      value: 18923.45,
      price: 42052.12,
      change24h: 5.2,
      allocation: 35.2,
      type: 'crypto'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      icon: <FaEthereum className="text-blue-500" />,
      balance: '4.23',
      value: 9456.78,
      price: 2234.15,
      change24h: 3.8,
      allocation: 17.6,
      type: 'crypto'
    },
    {
      name: 'FINFOX',
      symbol: 'FFX',
      icon: '🦊',
      balance: '150,000',
      value: 6375.00,
      price: 0.0425,
      change24h: 12.5,
      allocation: 11.9,
      type: 'token'
    },
    {
      name: 'USD Coin',
      symbol: 'USDC',
      icon: '💵',
      balance: '15,000',
      value: 15000.00,
      price: 1.00,
      change24h: 0.01,
      allocation: 27.9,
      type: 'stablecoin'
    },
    {
      name: 'Staked ETH',
      symbol: 'stETH',
      icon: <FaLock className="text-blue-500" />,
      balance: '1.75',
      value: 3909.76,
      price: 2234.15,
      change24h: 3.8,
      allocation: 7.4,
      type: 'staked'
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Assets' },
    { value: 'crypto', label: 'Cryptocurrencies' },
    { value: 'token', label: 'Tokens' },
    { value: 'stablecoin', label: 'Stablecoins' },
    { value: 'staked', label: 'Staked Assets' }
  ];

  const sortOptions = [
    { value: 'value', label: 'Value' },
    { value: 'name', label: 'Name' },
    { value: 'change', label: '24h Change' },
    { value: 'allocation', label: 'Allocation' }
  ];

  const filteredAssets = assets
    .filter(asset => assetFilter === 'all' || asset.type === assetFilter)
    .filter(asset => 
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'value':
          return b.value - a.value;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'change':
          return b.change24h - a.change24h;
        case 'allocation':
          return b.allocation - a.allocation;
        default:
          return 0;
      }
    });

  const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);

  // Portfolio chart data
  const portfolioData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Portfolio Value',
      data: [10000, 15000, 12000, 20000, 18000, 25000],
      borderColor: '#ff4400',
      tension: 0.4,
      fill: true,
      backgroundColor: 'rgba(255, 68, 0, 0.1)'
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(255, 68, 0, 0.1)'
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 68, 0, 0.1)'
        }
      }
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-gray-400">Total Balance</div>
              <div className="text-2xl font-bold">$42,420.69</div>
              <div className="text-green-500 text-sm">+12.5% (24h)</div>
            </div>
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <FaWallet className="text-orange-500 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-gray-400">24h Volume</div>
              <div className="text-2xl font-bold">$891,234</div>
              <div className="text-green-500 text-sm">+5.2% (24h)</div>
            </div>
            <div className="p-2 bg-green-500/10 rounded-lg">
              <FaChartBar className="text-green-500 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-gray-400">Total Staked</div>
              <div className="text-2xl font-bold">125,000 FFX</div>
              <div className="text-blue-500 text-sm">$5,312.50</div>
            </div>
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <FaLock className="text-blue-500 text-xl" />
            </div>
          </div>
        </div>
        <div className="bg-gray-800/50 p-4 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-gray-400">Total Trades</div>
              <div className="text-2xl font-bold">1,234</div>
              <div className="text-purple-500 text-sm">Last 30 days</div>
            </div>
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <FaExchangeAlt className="text-purple-500 text-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Portfolio Value</h3>
        <div className="h-[300px]">
          <Line data={portfolioData} options={chartOptions} />
        </div>
      </div>

      <div className="bg-gray-800/50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <FaBell className="text-orange-500" />
          Recent Notifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Price Alert', message: 'ETH is up 5% in the last hour', time: '35 mins ago' },
            { title: 'Stake Rewards', message: 'You earned 125 FFX from staking', time: '2 hours ago' },
            { title: 'New Feature', message: 'Try out our new trading competition', time: '1 day ago' }
          ].map((notification, index) => (
            <div key={index} className="bg-gray-700/50 p-4 rounded-lg">
              <div className="font-semibold mb-2">{notification.title}</div>
              <div className="text-sm text-gray-300 mb-2">{notification.message}</div>
              <div className="text-xs text-gray-400">{notification.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAssets = () => (
    <div className="space-y-6">
      {/* Assets Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Your Assets</h2>
        <div className="text-right">
          <div className="text-2xl font-bold">${totalValue.toLocaleString()}</div>
          <div className="text-green-500">+8.2% (24h)</div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search assets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800/50 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <select
              value={assetFilter}
              onChange={(e) => setAssetFilter(e.target.value)}
              className="appearance-none bg-gray-800/50 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {filterOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <FaFilter className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-gray-800/50 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <FaSort className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredAssets.map((asset) => (
          <div key={asset.symbol} className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="text-2xl">{asset.icon}</div>
                <div>
                  <div className="font-semibold">{asset.name}</div>
                  <div className="text-sm text-gray-400">{asset.symbol}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">${asset.value.toLocaleString()}</div>
                <div className={`text-sm ${asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {asset.change24h >= 0 ? '+' : ''}{asset.change24h}%
                </div>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Balance</span>
              <span>{asset.balance} {asset.symbol}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-400 mb-3">
              <span>Price</span>
              <span>${asset.price.toLocaleString()}</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Portfolio Allocation</span>
                <span>{asset.allocation}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-orange-500 rounded-full h-2" 
                  style={{ width: `${asset.allocation}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Portfolio Distribution */}
      <div className="bg-gray-800/50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Portfolio Distribution</h3>
        <div className="h-[300px]">
          <Doughnut 
            data={{
              labels: assets.map(asset => asset.name),
              datasets: [{
                data: assets.map(asset => asset.allocation),
                backgroundColor: [
                  '#ff4400',
                  '#3b82f6',
                  '#10b981',
                  '#f59e0b',
                  '#8b5cf6'
                ]
              }]
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'right',
                  labels: {
                    color: '#fff'
                  }
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  );

  const renderHistory = () => (
    <div className="text-center p-8">
      <h3 className="text-xl">History Section Coming Soon</h3>
    </div>
  );

  const renderSettings = () => (
    <div className="text-center p-8">
      <h3 className="text-xl">Settings Section Coming Soon</h3>
    </div>
  );

  const sections = [
    { id: 'overview', icon: FaChartLine, label: 'Overview' },
    { id: 'assets', icon: FaWallet, label: 'Assets' },
    { id: 'history', icon: FaHistory, label: 'History' },
    { id: 'settings', icon: FaCog, label: 'Settings' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
        <div className="flex gap-4 mb-6">
          {sections.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setDashboardView(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg capitalize ${
                dashboardView === id 
                  ? 'bg-orange-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Icon />
              {label}
            </button>
          ))}
        </div>

        {dashboardView === 'overview' && renderOverview()}
        {dashboardView === 'assets' && renderAssets()}
        {dashboardView === 'history' && renderHistory()}
        {dashboardView === 'settings' && renderSettings()}
      </div>
    </div>
  );
}

export default Dashboard;
