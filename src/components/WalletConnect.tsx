import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wallet, Shield, CheckCircle, AlertCircle, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const WalletConnect: React.FC = () => {
  const { toast } = useToast();
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [network, setNetwork] = useState('Ethereum Mainnet');

  const wallets = [
    {
      name: 'MetaMask',
      icon: '🦊',
      status: 'available',
      description: 'Connect using browser extension'
    },
    {
      name: 'WalletConnect',
      icon: '🔗',
      status: 'available',
      description: 'Scan with mobile wallet'
    },
    {
      name: 'Coinbase Wallet',
      icon: '🔵',
      status: 'available',
      description: 'Connect with Coinbase'
    },
    {
      name: 'Trust Wallet',
      icon: '🛡️',
      status: 'available',
      description: 'Mobile wallet connection'
    }
  ];

  const networks = [
    { name: 'Ethereum Mainnet', chainId: 1, status: 'active' },
    { name: 'Polygon', chainId: 137, status: 'available' },
    { name: 'BSC', chainId: 56, status: 'available' },
    { name: 'Arbitrum', chainId: 42161, status: 'available' }
  ];

  const handleConnect = (walletName: string) => {
    // Simulate wallet connection
    setIsConnected(true);
    setWalletAddress('0x742d35Cc6635C0532925a3b8D4c0c8b83C165687');
    toast({
      title: "Wallet Connected",
      description: `Successfully connected to ${walletName}.`,
    });
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setWalletAddress('');
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected.",
    });
  };

  const handleNetworkSwitch = (networkName: string) => {
    setNetwork(networkName);
    toast({
      title: "Network Switched",
      description: `Switched to ${networkName}.`,
    });
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    toast({
      title: "Address Copied",
      description: "Wallet address copied to clipboard.",
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Wallet Connection</h1>
        {isConnected && (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Connected
          </Badge>
        )}
      </div>

      {isConnected ? (
        <div className="space-y-6">
          {/* Connected Wallet Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="h-5 w-5" />
                Connected Wallet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <p className="font-semibold">MetaMask</p>
                  <p className="text-sm text-gray-600 font-mono">
                    {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={copyAddress}>
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={handleDisconnect}>
                    Disconnect
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Network</p>
                  <p className="font-semibold">{network}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Balance</p>
                  <p className="font-semibold">2.45 ETH</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Network Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Switch Network</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {networks.map((net) => (
                  <Button
                    key={net.chainId}
                    variant={network === net.name ? "default" : "outline"}
                    onClick={() => handleNetworkSwitch(net.name)}
                    className="justify-start h-auto p-4"
                  >
                    <div className="text-left">
                      <div className="font-semibold">{net.name}</div>
                      <div className="text-xs opacity-70">Chain ID: {net.chainId}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Security Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-semibold">Secure Connection</p>
                    <p className="text-sm text-gray-600">Your wallet is securely connected</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold">Transaction Signing</p>
                    <p className="text-sm text-gray-600">All transactions require your approval</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Connection Options */}
          <Card>
            <CardHeader>
              <CardTitle>Connect Your Wallet</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {wallets.map((wallet) => (
                  <Button
                    key={wallet.name}
                    variant="outline"
                    onClick={() => handleConnect(wallet.name)}
                    className="justify-start h-auto p-4 hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{wallet.icon}</span>
                      <div className="text-left">
                        <div className="font-semibold">{wallet.name}</div>
                        <div className="text-sm text-gray-600">{wallet.description}</div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Why Connect a Wallet?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Access DeFi features and earn rewards</li>
                <li>• Trade and manage your NFT collection</li>
                <li>• Interact with smart contracts securely</li>
                <li>• Send and receive cryptocurrency</li>
                <li>• Participate in blockchain governance</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;