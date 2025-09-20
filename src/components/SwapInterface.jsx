import React from 'react';
import { FaEthereum, FaAngleDown, FaExchangeAlt, FaCog, FaInfoCircle, FaChartLine, FaHistory } from 'react-icons/fa';
import useStore from '../store/useStore';

function SwapInterface() {
  const { 
    selectedToken1, 
    selectedToken2,
    toggleTokenModal,
    setActiveTokenField
  } = useStore();

  const handleTokenSelect = (field) => {
    setActiveTokenField(field);
    toggleTokenModal();
  };

  const recentTrades = [
    { time: '2 mins ago', pair: 'ETH/FFX', type: 'Buy', amount: '2.5 ETH', price: '$2,235.12' },
    { time: '5 mins ago', pair: 'ETH/FFX', type: 'Sell', amount: '1.8 ETH', price: '$2,232.45' },
    { time: '8 mins ago', pair: 'ETH/FFX', type: 'Buy', amount: '3.2 ETH', price: '$2,230.78' }
  ];

  return (
    <div className="w-full lg:w-2/5 space-y-4">
      {/* Main Swap Card */}
      <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Swap</h2>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors" title="Settings">
              <FaCog className="text-gray-400 hover:text-white" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors" title="Recent Transactions">
              <FaHistory className="text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          {/* Token Input 1 */}
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">You Pay</span>
              <span className="text-gray-400">Balance: {selectedToken1.balance}</span>
            </div>
            <div className="flex justify-between items-center">
              <input 
                type="text" 
                value="7.23" 
                className="bg-transparent text-2xl w-2/3 focus:outline-none"
              />
              <button 
                onClick={() => handleTokenSelect('token1')}
                className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-lg hover:bg-gray-600/50 transition-colors"
              >
                <FaEthereum className="text-blue-400" />
                <span>{selectedToken1.symbol}</span>
                <FaAngleDown />
              </button>
            </div>
            <div className="text-right mt-1">
              <span className="text-sm text-gray-400">≈ $16,183.52</span>
            </div>
          </div>

          {/* Swap Direction Button */}
          <div className="flex justify-center">
            <button className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors">
              <FaExchangeAlt className="text-orange-500" />
            </button>
          </div>

          {/* Token Input 2 */}
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">You Receive</span>
              <span className="text-gray-400">Balance: {selectedToken2.balance}</span>
            </div>
            <div className="flex justify-between items-center">
              <input 
                type="text" 
                value="100,420,690" 
                className="bg-transparent text-2xl w-2/3 focus:outline-none"
              />
              <button 
                onClick={() => handleTokenSelect('token2')}
                className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-lg hover:bg-gray-600/50 transition-colors"
              >
                <span>🦊</span>
                <span>{selectedToken2.symbol}</span>
                <FaAngleDown />
              </button>
            </div>
            <div className="text-right mt-1">
              <span className="text-sm text-gray-400">≈ $16,175.32</span>
            </div>
          </div>

          {/* Price Info */}
          <div className="bg-gray-800/50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Price</span>
              <div className="flex items-center gap-2">
                <span>1 {selectedToken1.symbol} = 13,889.44 {selectedToken2.symbol}</span>
                <button className="p-1 hover:bg-gray-700/50 rounded transition-colors">
                  <FaExchangeAlt className="text-gray-400 text-sm" />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Price Impact</span>
              <span className="text-green-500">0.05%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Minimum Received</span>
              <span>100,320,483 {selectedToken2.symbol}</span>
            </div>
          </div>

          <button className="w-full py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors">
            Swap Now
          </button>
        </div>
      </div>

      {/* Market Info Card */}
      <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold flex items-center gap-2">
            <FaChartLine className="text-orange-500" />
            Market Info
          </h3>
          <span className="text-sm text-gray-400">Last 24h</span>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-800/50 p-3 rounded-lg">
            <div className="text-gray-400 text-sm">24h Volume</div>
            <div className="font-semibold">$12.5M</div>
          </div>
          <div className="bg-gray-800/50 p-3 rounded-lg">
            <div className="text-gray-400 text-sm">24h Change</div>
            <div className="text-green-500 font-semibold">+5.23%</div>
          </div>
          <div className="bg-gray-800/50 p-3 rounded-lg">
            <div className="text-gray-400 text-sm">TVL</div>
            <div className="font-semibold">$45.8M</div>
          </div>
          <div className="bg-gray-800/50 p-3 rounded-lg">
            <div className="text-gray-400 text-sm">Gas</div>
            <div className="font-semibold">12 Gwei</div>
          </div>
        </div>
      </div>

      {/* Recent Trades Card */}
      <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold flex items-center gap-2">
            <FaHistory className="text-orange-500" />
            Recent Trades
          </h3>
          <button className="text-sm text-orange-500 hover:text-orange-400">View All</button>
        </div>
        <div className="space-y-3">
          {recentTrades.map((trade, index) => (
            <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-800/50 rounded-lg transition-colors">
              <div>
                <div className="font-medium">{trade.pair}</div>
                <div className="text-sm text-gray-400">{trade.time}</div>
              </div>
              <div className="text-right">
                <div className={trade.type === 'Buy' ? 'text-green-500' : 'text-red-500'}>
                  {trade.amount}
                </div>
                <div className="text-sm text-gray-400">{trade.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
        <div className="flex gap-2">
          <FaInfoCircle className="text-blue-500 mt-1" />
          <div>
            <div className="text-sm text-blue-500 font-medium">Trading Info</div>
            <div className="text-sm text-gray-400 mt-1">
              Trades are executed at the best possible price through our DEX aggregator. Slippage tolerance is set to 0.5%.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwapInterface;
