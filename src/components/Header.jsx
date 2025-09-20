import React from 'react';
import { FaWallet } from 'react-icons/fa';
import useStore from '../store/useStore';

function Header() {
  const { 
    account, 
    toggleWalletModal, 
    currentView,
    setCurrentView
  } = useStore();

  const handleNavClick = (view) => {
    setCurrentView(view.toLowerCase());
  };

  const connectWallet = () => {
    toggleWalletModal();
  };

  return (
    <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <h1 className="text-2xl font-bold gradient-text">FINFOX</h1>
          <nav>
            <ul className="flex gap-8">
              {['Swap', 'Launchpad', 'Points', 'Dashboard'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`${
                      item.toLowerCase() === currentView
                        ? 'text-orange-500'
                        : 'text-gray-300 hover:text-white'
                    } transition-colors`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <button 
          onClick={connectWallet}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all"
        >
          <FaWallet />
          {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
        </button>
      </div>
    </header>
  );
}

export default Header;
