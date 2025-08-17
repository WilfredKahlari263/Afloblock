import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CreditCard, Plus, Eye, EyeOff, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Cards: React.FC = () => {
  const { toast } = useToast();
  const [showBalance, setShowBalance] = useState(false);
  
  const cards = [
    {
      id: 1,
      name: 'Afriq Visa Card',
      number: '**** **** **** 1234',
      balance: 2458.50,
      type: 'Primary',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Crypto Card',
      number: '**** **** **** 5678',
      balance: 1250.00,
      type: 'Crypto',
      status: 'Active'
    }
  ];
  
  const handleAddCard = () => {
    toast({
      title: "Add New Card",
      description: "Card addition process initiated.",
    });
  };
  
  const handleCardSettings = (cardName: string) => {
    toast({
      title: "Card Settings",
      description: `Opening settings for ${cardName}.`,
    });
  };
  
  const toggleBalance = () => {
    setShowBalance(!showBalance);
    toast({
      title: showBalance ? "Balance Hidden" : "Balance Shown",
      description: showBalance ? "Card balances are now hidden." : "Card balances are now visible.",
    });
  };
  
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold gradient-text">My Cards</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleBalance}
          >
            {showBalance ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
            {showBalance ? 'Hide' : 'Show'} Balance
          </Button>
          <Button
            onClick={handleAddCard}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Card
          </Button>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <Card key={card.id} className="hover-lift bg-gradient-to-br from-gray-900 to-gray-800 text-white border-0">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{card.name}</CardTitle>
                <Badge variant={card.status === 'Active' ? 'default' : 'secondary'}>
                  {card.status}
                </Badge>
              </div>
              <div className="text-sm opacity-80">{card.type} Card</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <CreditCard className="h-6 w-6" />
                <span className="text-lg font-mono">{card.number}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm opacity-80">Balance</div>
                  <div className="text-2xl font-bold">
                    {showBalance ? `$${card.balance.toFixed(2)}` : '••••••'}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCardSettings(card.name)}
                  className="text-white hover:bg-white/20"
                >
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="text-xs opacity-60">
                Wilfred Munyaradzi Kahlari
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;