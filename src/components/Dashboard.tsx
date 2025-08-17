import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ArrowDownLeft, CreditCard, Coins, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import BlockchainStats from './BlockchainStats';

const Dashboard: React.FC = () => {
  const { toast } = useToast();
  
  const recentTransactions = [
    { name: 'Tendai Mukamuri', location: 'Harare', amount: 150.00, type: 'sent' },
    { name: 'Chipo Ndebele', location: 'Bulawayo', amount: 75.50, type: 'received' },
    { name: 'Blessing Moyo', location: 'Bulawayo', amount: 200.00, type: 'sent' }
  ];

  const handleSendMoney = () => {
    toast({
      title: "Send Money",
      description: "Opening send money interface...",
    });
  };

  const handleRequestMoney = () => {
    toast({
      title: "Request Money",
      description: "Request money functionality activated.",
    });
  };

  const handleTraditionalTransfer = () => {
    toast({
      title: "Traditional Transfer",
      description: "Traditional transfer service activated.",
    });
  };

  const handleBlockchainTransfer = () => {
    toast({
      title: "Blockchain Transfer",
      description: "Blockchain transfer service activated.",
    });
  };

  return (
    <div className="p-6 space-y-6 animate-slide-up">
      {/* Blockchain Network Stats */}
      <BlockchainStats />
      
      {/* Balance Card */}
      <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 hover-lift animate-bounce-in">
        <CardHeader>
          <CardTitle className="text-lg font-medium opacity-90">Total Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold mb-2">$2,458.50</div>
          <div className="text-sm opacity-80">Available for transfer</div>
          <div className="text-xs opacity-70 mt-1">≈ 1.24 ETH • ≈ 0.089 BTC</div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button 
          onClick={handleSendMoney}
          className="h-20 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex-col space-y-2 hover-lift transform hover:scale-105 transition-all"
        >
          <ArrowUpRight className="h-8 w-8" />
          <span className="font-semibold">Send Money</span>
        </Button>
        <Button 
          onClick={handleRequestMoney}
          className="h-20 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex-col space-y-2 hover-lift transform hover:scale-105 transition-all"
        >
          <ArrowDownLeft className="h-8 w-8" />
          <span className="font-semibold">Request</span>
        </Button>
      </div>

      {/* Recent Transactions */}
      <Card className="hover-lift">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentTransactions.map((tx, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full ${
                  tx.type === 'sent' ? 'bg-red-100' : 'bg-green-100'
                }`}>
                  {tx.type === 'sent' ? (
                    <ArrowUpRight className="h-4 w-4 text-red-600" />
                  ) : (
                    <ArrowDownLeft className="h-4 w-4 text-green-600" />
                  )}
                </div>
                <div>
                  <div className="font-medium">{tx.name}</div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <MapPin className="h-3 w-3" />
                    <span>{tx.location}</span>
                  </div>
                </div>
              </div>
              <div className={`font-semibold ${
                tx.type === 'sent' ? 'text-red-600' : 'text-green-600'
              }`}>
                {tx.type === 'sent' ? '-' : '+'}${tx.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Feature Cards */}
      <div className="grid gap-4">
        <Card 
          className="hover-lift border-2 border-transparent hover:border-blue-200 transition-all cursor-pointer"
          onClick={handleTraditionalTransfer}
        >
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-gradient-to-r from-orange-400 to-red-500 p-4 rounded-full shadow-lg">
              <CreditCard className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold gradient-text">Traditional Transfer</h3>
              <p className="text-gray-600">Send money to Harare & Bulawayo</p>
            </div>
          </CardContent>
        </Card>
        
        <Card 
          className="hover-lift border-2 border-transparent hover:border-purple-200 transition-all cursor-pointer"
          onClick={handleBlockchainTransfer}
        >
          <CardContent className="p-6 flex items-center space-x-4">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full shadow-lg">
              <Coins className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold gradient-text">Blockchain Transfer</h3>
              <p className="text-gray-600">Secure decentralized transactions</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;