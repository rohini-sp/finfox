import React, { useState } from 'react';
import { 
  FaUser, 
  FaShieldAlt, 
  FaBell, 
  FaPalette, 
  FaWallet, 
  FaGlobe, 
  FaMoon, 
  FaKey, 
  FaQrcode,
  FaToggleOn,
  FaToggleOff,
  FaCheck,
  FaExclamationTriangle
} from 'react-icons/fa';

function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({
    trades: true,
    price: true,
    news: false,
    rewards: true
  });
  const [theme, setTheme] = useState('dark');
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('English');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: FaUser },
    { id: 'security', label: 'Security', icon: FaShieldAlt },
    { id: 'notifications', label: 'Notifications', icon: FaBell },
    { id: 'preferences', label: 'Preferences', icon: FaPalette },
    { id: 'wallets', label: 'Wallets', icon: FaWallet }
  ];

  const connectedWallets = [
    { name: 'MetaMask', address: '0x1234...5678', primary: true },
    { name: 'WalletConnect', address: '0x8765...4321', primary: false }
  ];

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Username</label>
            <input 
              type="text" 
              className="w-full bg-gray-700/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              defaultValue="CryptoTrader123"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input 
              type="email" 
              className="w-full bg-gray-700/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              defaultValue="trader@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Trading Level</label>
            <div className="text-lg font-semibold">Level 3 Trader</div>
            <div className="text-sm text-gray-400">500 more points to Level 4</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Verification Status</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
            <div className="flex items-center gap-3">
              <FaCheck className="text-green-500" />
              <div>
                <div className="font-medium">Email Verification</div>
                <div className="text-sm text-gray-400">Completed on Dec 15, 2023</div>
              </div>
            </div>
            <span className="text-green-500">Verified</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
            <div className="flex items-center gap-3">
              <FaExclamationTriangle className="text-yellow-500" />
              <div>
                <div className="font-medium">KYC Verification</div>
                <div className="text-sm text-gray-400">Required for higher limits</div>
              </div>
            </div>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              Verify Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Two-Factor Authentication</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
            <div className="flex items-center gap-3">
              <FaQrcode className="text-xl" />
              <div>
                <div className="font-medium">Google Authenticator</div>
                <div className="text-sm text-gray-400">Protect your account with 2FA</div>
              </div>
            </div>
            <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">
              Enable
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Password</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Current Password</label>
            <input 
              type="password" 
              className="w-full bg-gray-700/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">New Password</label>
            <input 
              type="password" 
              className="w-full bg-gray-700/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Confirm New Password</label>
            <input 
              type="password" 
              className="w-full bg-gray-700/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
            Update Password
          </button>
        </div>
      </div>

      <div className="bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Login History</h3>
        <div className="space-y-3">
          {[
            { device: 'Chrome / Windows', ip: '192.168.1.1', time: '2023-12-18 14:30' },
            { device: 'Safari / iOS', ip: '192.168.1.2', time: '2023-12-17 09:15' }
          ].map((session, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
              <div>
                <div className="font-medium">{session.device}</div>
                <div className="text-sm text-gray-400">IP: {session.ip}</div>
              </div>
              <div className="text-sm text-gray-400">{session.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
              <div>
                <div className="font-medium capitalize">{key} Notifications</div>
                <div className="text-sm text-gray-400">
                  Receive notifications about {key}
                </div>
              </div>
              <button 
                onClick={() => setNotifications(prev => ({ ...prev, [key]: !value }))}
                className="text-2xl text-orange-500"
              >
                {value ? <FaToggleOn /> : <FaToggleOff />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPreferences = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Display Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Theme</label>
            <select 
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full bg-gray-700/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Currency</label>
            <select 
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full bg-gray-700/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Language</label>
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full bg-gray-700/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWallets = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Connected Wallets</h3>
        <div className="space-y-4">
          {connectedWallets.map((wallet, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
              <div className="flex items-center gap-3">
                <FaWallet className="text-xl" />
                <div>
                  <div className="font-medium">{wallet.name}</div>
                  <div className="text-sm text-gray-400">{wallet.address}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {wallet.primary && (
                  <span className="px-2 py-1 bg-orange-500/20 text-orange-500 rounded text-sm">
                    Primary
                  </span>
                )}
                <button className="text-red-500 hover:text-red-400">
                  Disconnect
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">
          Connect New Wallet
        </button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
        <div className="flex gap-4 mb-6 overflow-x-auto">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap ${
                activeTab === id 
                  ? 'bg-orange-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Icon />
              {label}
            </button>
          ))}
        </div>

        {activeTab === 'profile' && renderProfile()}
        {activeTab === 'security' && renderSecurity()}
        {activeTab === 'notifications' && renderNotifications()}
        {activeTab === 'preferences' && renderPreferences()}
        {activeTab === 'wallets' && renderWallets()}
      </div>
    </div>
  );
}

export default Settings;
