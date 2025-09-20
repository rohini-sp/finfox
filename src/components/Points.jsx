import React from 'react';
import { FaStar, FaExchangeAlt, FaGift, FaHistory, FaTrophy, FaChartLine, FaLock, FaCoins, FaUserFriends } from 'react-icons/fa';

function Points() {
  const userPoints = {
    total: 15420,
    level: 3,
    nextLevel: 4,
    progress: 75,
    history: [
      { action: 'Daily Trade', points: '+50', date: '2023-12-18 14:30', status: 'Completed' },
      { action: 'Volume Bonus', points: '+120', date: '2023-12-18 12:15', status: 'Completed' },
      { action: 'Referral Reward', points: '+200', date: '2023-12-17 23:45', status: 'Completed' }
    ],
    tasks: [
      { name: 'Daily Trade', points: 50, progress: 1, total: 1, status: 'completed', icon: <FaExchangeAlt /> },
      { name: 'Trade Volume', points: 100, progress: 750, total: 1000, status: 'in-progress', icon: <FaChartLine /> },
      { name: 'Refer Friends', points: 200, progress: 2, total: 5, status: 'in-progress', icon: <FaUserFriends /> }
    ],
    rewards: [
      { 
        name: 'Trading Fee Discount', 
        cost: '5,000', 
        description: '10% off trading fees for 7 days',
        icon: <FaCoins className="text-yellow-500" />
      },
      { 
        name: 'NFT Mystery Box', 
        cost: '10,000', 
        description: 'Random NFT from our collection',
        icon: <FaGift className="text-purple-500" />
      },
      { 
        name: 'Premium Membership', 
        cost: '20,000', 
        description: 'Access to exclusive features',
        icon: <FaTrophy className="text-orange-500" />
      }
    ],
    achievements: [
      { name: 'First Trade', points: 100, completed: true },
      { name: 'Volume Master', points: 500, completed: false },
      { name: 'Social Butterfly', points: 300, completed: true }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Points Overview */}
        <div className="lg:col-span-2 space-y-6">
          {/* Points Header */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <FaStar className="text-orange-500" />
                  Points Balance
                </h2>
                <p className="text-4xl font-bold mt-2">{userPoints.total.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <div className="text-gray-400">Level {userPoints.level}</div>
                <div className="text-sm text-gray-500">Next Level: {userPoints.nextLevel}</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Level Progress</span>
                <span className="text-white">{userPoints.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-orange-500 rounded-full h-2" 
                  style={{ width: `${userPoints.progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-4">
              <div className="text-gray-400">Daily Points</div>
              <div className="text-2xl font-bold">370</div>
              <div className="text-sm text-green-500">+50 today</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-4">
              <div className="text-gray-400">Weekly Rank</div>
              <div className="text-2xl font-bold">#123</div>
              <div className="text-sm text-orange-500">Top 5%</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-4">
              <div className="text-gray-400">Total Tasks</div>
              <div className="text-2xl font-bold">15/24</div>
              <div className="text-sm text-blue-500">62.5% complete</div>
            </div>
          </div>

          {/* Daily Tasks */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaChartLine className="text-orange-500" />
              Daily Tasks
            </h3>
            <div className="space-y-4">
              {userPoints.tasks.map((task, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-700/50 rounded-lg">
                        {task.icon}
                      </div>
                      <div>
                        <div className="font-semibold">{task.name}</div>
                        <div className="text-sm text-gray-400">+{task.points} points</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">
                        {task.progress}/{task.total}
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`rounded-full h-2 ${
                        task.status === 'completed' ? 'bg-green-500' : 'bg-orange-500'
                      }`}
                      style={{ width: `${(task.progress / task.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="space-y-6">
          {/* Available Rewards */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaGift className="text-orange-500" />
              Available Rewards
            </h3>
            <div className="space-y-4">
              {userPoints.rewards.map((reward, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-700/50 rounded-lg">
                        {reward.icon}
                      </div>
                      <div>
                        <div className="font-semibold">{reward.name}</div>
                        <div className="text-sm text-gray-400">{reward.description}</div>
                      </div>
                    </div>
                    <div className="text-orange-500 font-semibold">
                      {reward.cost} pts
                    </div>
                  </div>
                  <button className="w-full mt-2 py-2 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
                    Redeem
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Points History */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaHistory className="text-orange-500" />
              Recent Activity
            </h3>
            <div className="space-y-3">
              {userPoints.history.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-800/50 rounded-lg">
                  <div>
                    <div className="font-semibold">{item.action}</div>
                    <div className="text-sm text-gray-400">{item.date}</div>
                  </div>
                  <div className="text-green-500 font-semibold">
                    {item.points}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FaTrophy className="text-orange-500" />
              Achievements
            </h3>
            <div className="space-y-3">
              {userPoints.achievements.map((achievement, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${achievement.completed ? 'bg-green-500/20' : 'bg-gray-700/50'}`}>
                      <FaTrophy className={achievement.completed ? 'text-green-500' : 'text-gray-500'} />
                    </div>
                    <div>
                      <div className="font-semibold">{achievement.name}</div>
                      <div className="text-sm text-gray-400">{achievement.points} points</div>
                    </div>
                  </div>
                  {achievement.completed && (
                    <div className="text-green-500">
                      <FaStar />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Points;
