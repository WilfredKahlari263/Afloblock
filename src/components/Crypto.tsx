import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Coins, TrendingUp, Wallet } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Crypto: React.FC = () => {
  const { toast } = useToast();
  
  const handleBuyCrypto = () => {
    toast({
      title: "Buy Crypto",
      description: "Crypto purchase interface activated.",
    });
  };
  
  const handleSellCrypto = () => {
    toast({
      title: "Sell Crypto",
      description: "Crypto selling interface activated.",
    });
  };
  
  const handleSwapCrypto = () => {
    toast({
      title: "Swap Crypto",
      description: "Crypto swap interface activated.",
    });
  };
  
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold gradient-text">Crypto Wallet</h1>
      
      <Card className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coins className="h-6 w-6" />
            Crypto Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">0.00234 BTC</div>
          <div className="text-lg opacity-90">≈ $1,250.00</div>
        </CardContent>
      </Card>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Button onClick={handleBuyCrypto} className="h-16 bg-green-600 hover:bg-green-700">
          <Wallet className="h-6 w-6 mr-2" />
          Buy Crypto
        </Button>
        <Button onClick={handleSellCrypto} className="h-16 bg-red-600 hover:bg-red-700">
          <TrendingUp className="h-6 w-6 mr-2" />
          Sell Crypto
        </Button>
        <Button onClick={handleSwapCrypto} className="h-16 bg-purple-600 hover:bg-purple-700">
          <Coins className="h-6 w-6 mr-2" />
          Swap Crypto
        </Button>
      </div>
    </div>
  );
};

export default Crypto;