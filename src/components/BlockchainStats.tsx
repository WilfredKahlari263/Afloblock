import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Activity, Zap } from 'lucide-react';

const BlockchainStats: React.FC = () => {
  const stats = [
    {
      title: 'Gas Price',
      value: '25 Gwei',
      change: '+5.2%',
      trend: 'up',
      icon: Zap
    },
    {
      title: 'Block Height',
      value: '18,756,432',
      change: '+0.01%',
      trend: 'up',
      icon: Activity
    },
    {
      title: 'Network Hash Rate',
      value: '421.5 TH/s',
      change: '-2.1%',
      trend: 'down',
      icon: TrendingUp
    },
    {
      title: 'Active Addresses',
      value: '847,293',
      change: '+8.7%',
      trend: 'up',
      icon: TrendingUp
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <Badge 
                className={`mt-1 ${stat.trend === 'up' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
                }`}
              >
                {stat.trend === 'up' ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {stat.change}
              </Badge>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default BlockchainStats;