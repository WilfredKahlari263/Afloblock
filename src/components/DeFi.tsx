import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, TrendingDown, Coins, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DeFi: React.FC = () => {
  const { toast } = useToast();
  const [stakeAmount, setStakeAmount] = useState('');
  const [lendAmount, setLendAmount] = useState('');

  const pools = [
    {
      name: 'ETH/USDC',
      apy: '12.5%',
      tvl: '$2.4M',
      userStaked: '0.5 ETH',
      rewards: '0.025 ETH'
    },
    {
      name: 'BTC/USDT',
      apy: '8.7%',
      tvl: '$1.8M',
      userStaked: '0.02 BTC',
      rewards: '0.001 BTC'
    },
    {
      name: 'MATIC/USDC',
      apy: '15.2%',
      tvl: '$890K',
      userStaked: '1000 MATIC',
      rewards: '45 MATIC'
    }
  ];

  const lendingPools = [
    {
      asset: 'USDC',
      supplyApy: '4.2%',
      borrowApy: '6.8%',
      supplied: '$1,250',
      borrowed: '$0'
    },
    {
      asset: 'ETH',
      supplyApy: '3.1%',
      borrowApy: '5.4%',
      supplied: '0.8 ETH',
      borrowed: '0 ETH'
    },
    {
      asset: 'BTC',
      supplyApy: '2.8%',
      borrowApy: '4.9%',
      supplied: '0 BTC',
      borrowed: '0 BTC'
    }
  ];

  const handleStake = () => {
    toast({
      title: "Staking Successful",
      description: `Staked ${stakeAmount} tokens successfully.`,
    });
    setStakeAmount('');
  };

  const handleLend = () => {
    toast({
      title: "Lending Successful",
      description: `Supplied ${lendAmount} to lending pool.`,
    });
    setLendAmount('');
  };

  const handleClaim = (poolName: string) => {
    toast({
      title: "Rewards Claimed",
      description: `Claimed rewards from ${poolName} pool.`,
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">DeFi Dashboard</h1>
        <div className="flex gap-2">
          <Badge className="bg-green-100 text-green-800">
            <TrendingUp className="h-3 w-3 mr-1" />
            Total APY: 8.9%
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Staked</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,420</div>
            <p className="text-xs text-green-600 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12.5% this month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Rewards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$156.80</div>
            <p className="text-xs text-green-600 flex items-center">
              <Coins className="h-3 w-3 mr-1" />
              Available to claim
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Net APY</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">11.2%</div>
            <p className="text-xs text-blue-600 flex items-center">
              <DollarSign className="h-3 w-3 mr-1" />
              Weighted average
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="staking" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="staking">Liquidity Staking</TabsTrigger>
          <TabsTrigger value="lending">Lending & Borrowing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="staking" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Stake Tokens</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Amount to stake..."
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleStake} className="bg-blue-600 hover:bg-blue-700">
                  Stake
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {pools.map((pool, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-semibold">{pool.name}</h3>
                      <p className="text-sm text-gray-600">TVL: {pool.tvl}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {pool.apy} APY
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Your Stake</p>
                      <p className="font-semibold">{pool.userStaked}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Rewards</p>
                      <p className="font-semibold text-green-600">{pool.rewards}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => handleClaim(pool.name)}
                    className="w-full"
                  >
                    Claim Rewards
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="lending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Supply Assets</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Amount to supply..."
                  value={lendAmount}
                  onChange={(e) => setLendAmount(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleLend} className="bg-purple-600 hover:bg-purple-700">
                  Supply
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {lendingPools.map((pool, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold">{pool.asset}</h3>
                    <div className="flex gap-2">
                      <Badge className="bg-blue-100 text-blue-800">
                        Supply: {pool.supplyApy}
                      </Badge>
                      <Badge className="bg-red-100 text-red-800">
                        Borrow: {pool.borrowApy}
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Supplied</p>
                      <p className="font-semibold">{pool.supplied}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Borrowed</p>
                      <p className="font-semibold">{pool.borrowed}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DeFi;