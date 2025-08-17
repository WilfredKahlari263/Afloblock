import React, { useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import SendMoney from './SendMoney';
import TransactionHistory from './TransactionHistory';
import Profile from './Profile';
import Cards from './Cards';
import Crypto from './Crypto';
import WalletConnect from './WalletConnect';
import DeFi from './DeFi';
import NFT from './NFT';
import SmartContracts from './SmartContracts';
import { useToast } from '@/hooks/use-toast';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState('dashboard');
  const { toast } = useToast();

  const handleSettings = () => {
    toast({
      title: "Settings",
      description: "Settings panel activated.",
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'send':
        return <SendMoney />;
      case 'history':
        return <TransactionHistory />;
      case 'profile':
        return <Profile />;
      case 'cards':
        return <Cards />;
      case 'crypto':
        return <Crypto />;
      case 'wallet':
        return <WalletConnect />;
      case 'defi':
        return <DeFi />;
      case 'nft':
        return <NFT />;
      case 'contracts':
        return <SmartContracts />;
      case 'settings':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 gradient-text">Settings</h1>
            <div className="space-y-4">
              <button onClick={handleSettings} className="w-full p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700">
                General Settings
              </button>
              <button onClick={handleSettings} className="w-full p-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700">
                Security Settings
              </button>
              <button onClick={handleSettings} className="w-full p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700">
                Notification Settings
              </button>
              <button onClick={handleSettings} className="w-full p-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-lg hover:from-yellow-700 hover:to-orange-700">
                Blockchain Settings
              </button>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={toggleSidebar} />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => toggleSidebar()} 
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        <main className="flex-1 md:ml-0">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;