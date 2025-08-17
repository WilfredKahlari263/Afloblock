import React from 'react';
import { Button } from '@/components/ui/button';
import { Wallet, Menu, Bell, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { toast } = useToast();
  
  const handleNotifications = () => {
    toast({
      title: "Notifications",
      description: "You have 3 new notifications.",
    });
  };
  
  const handleUserMenu = () => {
    toast({
      title: "User Menu",
      description: "User menu options activated.",
    });
  };
  
  return (
    <header className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white shadow-2xl">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="text-white hover:bg-white/20 md:hidden transform hover:scale-110 transition-all"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Wallet className="h-8 w-8" />
            </div>
            <span className="text-2xl font-bold tracking-wide">Afloblock</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleNotifications}
            className="text-white hover:bg-white/20 transform hover:scale-110 transition-all"
          >
            <Bell className="h-6 w-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleUserMenu}
            className="text-white hover:bg-white/20 transform hover:scale-110 transition-all"
          >
            <User className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;