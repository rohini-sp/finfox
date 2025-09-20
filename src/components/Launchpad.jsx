import React, { useState } from 'react';
import { FaRocket, FaClock, FaCheckCircle, FaDiscord, FaTwitter, FaTelegram, FaGlobe } from 'react-icons/fa';

function Launchpad() {
  const [activeTab, setActiveTab] = useState('active');

  const launchpadProjects = {
    active: [
      {
        name: "MetaVerse X",
        symbol: "MVX",
        raised: "150,000",
        goal: "200,000",
        progress: 75,
        endTime: "23:45:12",
        price: "0.00025",
        description: "Next-gen metaverse gaming platform",
        socials: {
          website: "#",
          discord: "#",
          twitter: "#",
          telegram: "#"
        }
      },
      {
        name: "DeFi Protocol",
        symbol: "DFP",
        raised: "80,000",
        goal: "150,000",
        progress: 53,
        endTime: "11:22:33",
        price: "0.00012",
        description: "Innovative DeFi lending protocol",
        socials: {
          website: "#",
          discord: "#",
          twitter: "#",
          telegram: "#"
        }
      }
    ],
    upcoming: [
      {
        name: "AI Finance",
        symbol: "AIF",
        startDate: "2024-01-05",
        goal: "300,000",
        price: "0.00045",
        description: "AI-powered financial predictions",
        socials: {
          website: "#",
          discord: "#",
          twitter: "#",
          telegram: "#"
        }
      }
    ],
    completed: [
      {
        name: "GameFi Token",
        symbol: "GFT",
        raised: "250,000",
        goal: "250,000",
        progress: 100,
        price: "0.00018",
        description: "Gaming rewards platform",
        socials: {
          website: "#",
          discord: "#",
          twitter: "#",
          telegram: "#"
        }
      }
    ]
  };

  const renderSocialLinks = (socials) => (
    <div className="flex gap-3 text-gray-400">
      <a href={socials.website} className="hover:text-white"><FaGlobe /></a>
      <a href={socials.discord} className="hover:text-white"><FaDiscord /></a>
      <a href={socials.twitter} className="hover:text-white"><FaTwitter /></a>
      <a href={socials.telegram} className="hover:text-white"><FaTelegram /></a>
    </div>
  );

  const renderActiveProject = (project) => (
    <div key={project.symbol} className="bg-gray-800/50 rounded-lg p-6 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p className="text-gray-400">{project.symbol}</p>
        </div>
        {renderSocialLinks(project.socials)}
      </div>
      
      <p className="text-gray-300">{project.description}</p>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Progress</span>
          <span className="text-white">{project.progress}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-orange-500 rounded-full h-2" 
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Raised: {project.raised} USDT</span>
          <span className="text-gray-400">Goal: {project.goal} USDT</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-gray-700/50 p-3 rounded-lg">
          <div className="text-gray-400">Price</div>
          <div className="text-white">{project.price} USDT</div>
        </div>
        <div className="bg-gray-700/50 p-3 rounded-lg">
          <div className="text-gray-400">Ends in</div>
          <div className="text-white">{project.endTime}</div>
        </div>
      </div>

      <button className="w-full py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors">
        Participate Now
      </button>
    </div>
  );

  const renderUpcomingProject = (project) => (
    <div key={project.symbol} className="bg-gray-800/50 rounded-lg p-6 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p className="text-gray-400">{project.symbol}</p>
        </div>
        {renderSocialLinks(project.socials)}
      </div>
      
      <p className="text-gray-300">{project.description}</p>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-gray-700/50 p-3 rounded-lg">
          <div className="text-gray-400">Start Date</div>
          <div className="text-white">{project.startDate}</div>
        </div>
        <div className="bg-gray-700/50 p-3 rounded-lg">
          <div className="text-gray-400">Price</div>
          <div className="text-white">{project.price} USDT</div>
        </div>
      </div>

      <button className="w-full py-3 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
        Set Reminder
      </button>
    </div>
  );

  const renderCompletedProject = (project) => (
    <div key={project.symbol} className="bg-gray-800/50 rounded-lg p-6 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold">{project.name}</h3>
          <p className="text-gray-400">{project.symbol}</p>
        </div>
        {renderSocialLinks(project.socials)}
      </div>
      
      <p className="text-gray-300">{project.description}</p>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Final Raise</span>
          <span className="text-white">{project.raised} USDT</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-green-500 rounded-full h-2" 
            style={{ width: '100%' }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-gray-700/50 p-3 rounded-lg">
          <div className="text-gray-400">Final Price</div>
          <div className="text-white">{project.price} USDT</div>
        </div>
        <div className="bg-gray-700/50 p-3 rounded-lg">
          <div className="text-gray-400">Status</div>
          <div className="text-green-500">Completed</div>
        </div>
      </div>

      <button className="w-full py-3 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors">
        View Details
      </button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Launchpad</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('active')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                activeTab === 'active' 
                  ? 'bg-orange-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <FaRocket />
              Active
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                activeTab === 'upcoming' 
                  ? 'bg-orange-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <FaClock />
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                activeTab === 'completed' 
                  ? 'bg-orange-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <FaCheckCircle />
              Completed
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeTab === 'active' && launchpadProjects.active.map(renderActiveProject)}
          {activeTab === 'upcoming' && launchpadProjects.upcoming.map(renderUpcomingProject)}
          {activeTab === 'completed' && launchpadProjects.completed.map(renderCompletedProject)}
        </div>
      </div>
    </div>
  );
}

export default Launchpad;
