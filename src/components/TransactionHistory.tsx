import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ArrowDownLeft, Coins, CreditCard } from 'lucide-react';

const TransactionHistory: React.FC = () => {
  const generateTransactions = () => {
    const names = ['Tendai Mukamuri', 'Chipo Ndebele', 'Blessing Moyo', 'Farai Chigumba', 'Nomsa Sibanda', 'Tatenda Mutasa', 'Memory Chivasa', 'Trust Mpofu', 'Patience Nyoni', 'Kudakwashe Mhuri'];
    const locations = ['Harare', 'Bulawayo', 'Gweru', 'Masvingo', 'Mutare', 'Chitungwiza', 'Kwekwe', 'Kadoma'];
    const transactions = [];
    
    for (let i = 1; i <= 2025; i++) {
      const type = Math.random() > 0.5 ? 'sent' : 'received';
      const method = Math.random() > 0.7 ? 'crypto' : 'traditional';
      const amount = method === 'crypto' ? (Math.random() * 0.1).toFixed(4) : (Math.random() * 500 + 10).toFixed(2);
      const status = Math.random() > 0.1 ? 'completed' : 'pending';
      const date = new Date(2025, 0, Math.floor(Math.random() * 31) + 1).toISOString().split('T')[0];
      
      transactions.push({
        id: i,
        type,
        method,
        amount: parseFloat(amount),
        recipient: names[Math.floor(Math.random() * names.length)],
        location: locations[Math.floor(Math.random() * locations.length)],
        date,
        status
      });
    }
    return transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };

  const transactions = generateTransactions();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Recent Transactions ({transactions.length.toLocaleString()})</h1>
      
      <div className="space-y-4 max-h-[600px] overflow-y-auto">
        {transactions.slice(0, 50).map((tx) => (
          <Card key={tx.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    tx.type === 'sent' ? 'bg-red-100' : 'bg-green-100'
                  }`}>
                    {tx.type === 'sent' ? (
                      <ArrowUpRight className={`h-5 w-5 ${
                        tx.type === 'sent' ? 'text-red-600' : 'text-green-600'
                      }`} />
                    ) : (
                      <ArrowDownLeft className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">
                        {tx.type === 'sent' ? 'Sent to' : 'Received from'}
                      </span>
                      {tx.method === 'crypto' ? (
                        <Coins className="h-4 w-4 text-yellow-600" />
                      ) : (
                        <CreditCard className="h-4 w-4 text-blue-600" />
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      {tx.recipient}
                    </div>
                    <div className="text-xs text-gray-500">
                      {tx.location} • {tx.date}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`font-semibold ${
                    tx.type === 'sent' ? 'text-red-600' : 'text-green-600'
                  }`}>
                    {tx.type === 'sent' ? '-' : '+'}${tx.method === 'crypto' ? tx.amount.toFixed(4) : tx.amount.toFixed(2)}
                  </div>
                  <Badge variant={tx.status === 'completed' ? 'default' : 'secondary'}>
                    {tx.status}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-500">
        Showing 50 of {transactions.length.toLocaleString()} transactions
      </div>
    </div>
  );
};

export default TransactionHistory;