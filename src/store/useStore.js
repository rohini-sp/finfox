import { create } from 'zustand';

const useStore = create((set) => ({
  account: null,
  selectedToken1: {
    symbol: 'ETH',
    name: 'Ethereum',
    balance: '12.45',
    icon: 'ETH'
  },
  selectedToken2: {
    symbol: 'MEME',
    name: 'MEME Token',
    balance: '100420690',
    icon: 'MEME'
  },
  isWalletModalOpen: false,
  isTokenModalOpen: false,
  activeTokenField: null,
  currentView: 'swap',
  dashboardView: 'overview',

  setAccount: (account) => set({ account }),
  setSelectedToken1: (token) => set({ selectedToken1: token }),
  setSelectedToken2: (token) => set({ selectedToken2: token }),
  toggleWalletModal: () => set((state) => ({ isWalletModalOpen: !state.isWalletModalOpen })),
  toggleTokenModal: () => set((state) => ({ isTokenModalOpen: !state.isTokenModalOpen })),
  setActiveTokenField: (field) => set({ activeTokenField: field }),
  setDashboardView: (view) => set({ dashboardView: view }),
  setCurrentView: (view) => set({ currentView: view, dashboardView: 'overview' })
}));

export default useStore;
