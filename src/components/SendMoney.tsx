import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CreditCard, Coins, Send, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SendMoney: React.FC = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [cryptoAddress, setCryptoAddress] = useState('');
  const [location, setLocation] = useState('');

  const zimbabweContacts = [
    { name: 'Tendai Mukamuri', phone: '+263 77 123 4567', location: 'Harare' },
    { name: 'Chipo Ndebele', phone: '+263 78 234 5678', location: 'Bulawayo' },
    { name: 'Blessing Moyo', phone: '+263 71 345 6789', location: 'Bulawayo' },
    { name: 'Farai Chigumba', phone: '+263 77 456 7890', location: 'Harare' },
    { name: 'Nomsa Sibanda', phone: '+263 78 567 8901', location: 'Bulawayo' },
    { name: 'Tatenda Mutasa', phone: '+263 71 678 9012', location: 'Harare' }
  ];

  const handleTraditionalSend = () => {
    if (!recipient || !amount) {
      toast({
        title: "Missing Information",
        description: "Please select a recipient and enter an amount.",
        variant: "destructive"
      });
      return;
    }
    
    const selectedContact = zimbabweContacts.find(c => c.name === recipient);
    const locationText = selectedContact ? ` in ${selectedContact.location}` : '';
    
    toast({
      title: "Transfer Initiated",
      description: `Sending $${amount} to ${recipient}${locationText}`,
    });
    
    // Reset form
    setAmount('');
    setRecipient('');
  };

  const handleCryptoSend = () => {
    if (!cryptoAddress || !amount) {
      toast({
        title: "Missing Information",
        description: "Please enter a wallet address and amount.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Crypto Transfer Initiated",
      description: `Sending $${amount} crypto to ${cryptoAddress.substring(0, 10)}...`,
    });
    
    // Reset form
    setAmount('');
    setCryptoAddress('');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 gradient-text">Send Money</h1>
      
      <Tabs defaultValue="traditional" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="traditional" className="flex items-center space-x-2">
            <CreditCard className="h-4 w-4" />
            <span>Traditional</span>
          </TabsTrigger>
          <TabsTrigger value="crypto" className="flex items-center space-x-2">
            <Coins className="h-4 w-4" />
            <span>Blockchain</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="traditional">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Traditional Transfer</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="recipient">Select Recipient</Label>
                <Select value={recipient} onValueChange={setRecipient}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a contact" />
                  </SelectTrigger>
                  <SelectContent>
                    {zimbabweContacts.map((contact) => (
                      <SelectItem key={contact.name} value={contact.name}>
                        <div className="flex items-center space-x-2">
                          <span>{contact.name}</span>
                          <MapPin className="h-3 w-3 text-gray-500" />
                          <span className="text-sm text-gray-500">{contact.location}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="amount">Amount ($)</Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                />
              </div>
              <Button 
                onClick={handleTraditionalSend} 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Money
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="crypto">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Coins className="h-5 w-5" />
                <span>Blockchain Transfer</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="crypto-address">Wallet Address</Label>
                <Input
                  id="crypto-address"
                  value={cryptoAddress}
                  onChange={(e) => setCryptoAddress(e.target.value)}
                  placeholder="Enter wallet address"
                />
              </div>
              <div>
                <Label htmlFor="crypto-amount">Amount ($)</Label>
                <Input
                  id="crypto-amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                />
              </div>
              <Button 
                onClick={handleCryptoSend} 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Coins className="h-4 w-4 mr-2" />
                Send Crypto
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SendMoney;