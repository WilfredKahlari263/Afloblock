import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, Send, History, Settings, CreditCard, Coins, User, FileText, TrendingUp, Image, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'send', label: 'Send Money', icon: Send },
    { id: 'history', label: 'History', icon: History },
    { id: 'cards', label: 'Cards', icon: CreditCard },
    { id: 'crypto', label: 'Crypto', icon: Coins },
    { id: 'wallet', label: 'Wallet Connect', icon: Wallet },
    { id: 'defi', label: 'DeFi', icon: TrendingUp },
    { id: 'nft', label: 'NFT Marketplace', icon: Image },
    { id: 'contracts', label: 'Smart Contracts', icon: FileText },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={onClose} />
      )}
      
      <div className={cn(
        "fixed left-0 top-0 h-full w-64 bg-white shadow-2xl transform transition-all duration-300 z-50",
        "md:relative md:translate-x-0 md:shadow-lg md:border-r",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 border-b bg-gradient-to-r from-gray-50 to-gray-100">
          <h2 className="text-xl font-bold gradient-text">Navigation</h2>
        </div>
        
        <nav className="p-4 space-y-2 max-h-[calc(100vh-100px)] overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start space-x-3 h-11 text-left transform hover:scale-105 transition-all text-sm",
                  activeTab === item.id 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" 
                    : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                )}
                onClick={() => {
                  onTabChange(item.id);
                  onClose();
                }}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{item.label}</span>
              </Button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;