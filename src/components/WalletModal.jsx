import React from 'react';
import { FaTimesCircle, FaEthereum, FaWallet } from 'react-icons/fa';
import useStore from '../store/useStore';

function WalletModal() {
  const { isWalletModalOpen, toggleWalletModal, setAccount } = useStore();

  const connectWallet = async (type) => {
    try {
      // Simulated wallet connection
      const mockAccount = '0x1234...5678';
      setAccount(mockAccount);
      toggleWalletModal();
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  if (!isWalletModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl p-6 w-96">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Connect Wallet</h3>
          <button onClick={toggleWalletModal}>
            <FaTimesCircle className="text-gray-400 hover:text-white" />
          </button>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => connectWallet('metamask')}
            className="w-full flex items-center justify-between p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <span className="flex items-center gap-3">
              <FaEthereum className="text-2xl" />
              MetaMask
            </span>
            <span className="text-gray-400">Popular</span>
          </button>

          <button
            onClick={() => connectWallet('walletconnect')}
            className="w-full flex items-center justify-between p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <span className="flex items-center gap-3">
              <FaWallet className="text-2xl" />
              WalletConnect
            </span>
            <span className="text-gray-400">Universal</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WalletModal;
