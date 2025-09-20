import React from 'react';
import Header from './components/Header';
import SwapInterface from './components/SwapInterface';
import ChartSection from './components/ChartSection';
import WalletModal from './components/WalletModal';
import TokenModal from './components/TokenModal';
import Dashboard from './components/Dashboard';
import Launchpad from './components/Launchpad';
import Points from './components/Points';
import useStore from './store/useStore';

function App() {
  const { currentView } = useStore();

  const renderMainContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'launchpad':
        return <Launchpad />;
      case 'points':
        return <Points />;
      case 'swap':
      default:
        return (
          <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
            <SwapInterface />
            <ChartSection />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      {renderMainContent()}
      <WalletModal />
      <TokenModal />
    </div>
  );
}

export default App;
