import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { FileText, Play, CheckCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SmartContracts: React.FC = () => {
  const { toast } = useToast();
  const [contractAddress, setContractAddress] = useState('');

  const contracts = [
    {
      id: 1,
      name: 'Payment Escrow',
      address: '0x742d35Cc6635C0532925a3b8D4c0c8b83C165687',
      status: 'active',
      balance: '1.5 ETH',
      description: 'Automated payment release upon delivery confirmation'
    },
    {
      id: 2,
      name: 'Multi-Sig Wallet',
      address: '0x8ba1f109551bD432803012645Hac136c82C165687',
      status: 'pending',
      balance: '0.8 ETH',
      description: 'Requires 2 of 3 signatures for transactions'
    },
    {
      id: 3,
      name: 'Token Vesting',
      address: '0x1a2b3c4d5e6f7890abcdef1234567890abcdef12',
      status: 'completed',
      balance: '0.0 ETH',
      description: 'Time-locked token release schedule'
    }
  ];

  const handleDeploy = () => {
    toast({
      title: "Smart Contract Deployed",
      description: "Your contract has been deployed to the blockchain.",
    });
  };

  const handleExecute = (contractName: string) => {
    toast({
      title: "Contract Executed",
      description: `${contractName} has been executed successfully.`,
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <Play className="h-4 w-4" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Smart Contracts</h1>
        <Button onClick={handleDeploy} className="bg-purple-600 hover:bg-purple-700">
          <FileText className="h-4 w-4 mr-2" />
          Deploy New
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contract Interaction</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter contract address..."
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
              className="flex-1"
            />
            <Button variant="outline">
              Connect
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {contracts.map((contract) => (
          <Card key={contract.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg">{contract.name}</CardTitle>
                  <p className="text-sm text-gray-600 font-mono mt-1">{contract.address}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className={getStatusColor(contract.status)}>
                    {getStatusIcon(contract.status)}
                    <span className="ml-1 capitalize">{contract.status}</span>
                  </Badge>
                  <p className="text-sm font-semibold">{contract.balance}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-gray-500 mb-4">{contract.description}</p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleExecute(contract.name)}
                  disabled={contract.status === 'completed'}
                >
                  Execute
                </Button>
                <Button size="sm" variant="ghost">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SmartContracts;