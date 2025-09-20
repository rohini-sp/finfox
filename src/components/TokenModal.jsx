import React, { useState } from 'react';
import { FaTimesCircle, FaSearch } from 'react-icons/fa';
import useStore from '../store/useStore';
import { tokens } from '../config/tokens';

function TokenModal() {
  const { 
    isTokenModalOpen, 
    toggleTokenModal, 
    activeTokenField,
    setSelectedToken1,
    setSelectedToken2
  } = useStore();
  
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTokens = tokens.filter(token => 
    token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    token.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTokenSelect = (token) => {
    if (activeTokenField === 'token1') {
      setSelectedToken1(token);
    } else {
      setSelectedToken2(token);
    }
    toggleTokenModal();
  };

  if (!isTokenModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl p-6 w-96">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Select Token</h3>
          <button onClick={toggleTokenModal}>
            <FaTimesCircle className="text-gray-400 hover:text-white" />
          </button>
        </div>

        <div className="relative mb-4">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search token name or paste address"
            className="w-full bg-gray-800 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="space-y-2 max-h-96 overflow-y-auto">
          {filteredTokens.map((token) => (
            <button
              key={token.symbol}
              onClick={() => handleTokenSelect(token)}
              className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">{token.icon}</span>
                <div className="text-left">
                  <div>{token.symbol}</div>
                  <div className="text-sm text-gray-400">{token.name}</div>
                </div>
              </span>
              <span>{token.balance}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TokenModal;
