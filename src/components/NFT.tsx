import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Image, Upload, Eye, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NFT: React.FC = () => {
  const { toast } = useToast();
  const [mintName, setMintName] = useState('');
  const [mintPrice, setMintPrice] = useState('');

  const myNFTs = [
    {
      id: 1,
      name: 'Digital Art #001',
      image: '/placeholder.svg',
      price: '0.5 ETH',
      collection: 'My Collection',
      rarity: 'Rare'
    },
    {
      id: 2,
      name: 'Crypto Punk #2847',
      image: '/placeholder.svg',
      price: '2.1 ETH',
      collection: 'CryptoPunks',
      rarity: 'Epic'
    },
    {
      id: 3,
      name: 'Abstract Vision',
      image: '/placeholder.svg',
      price: '0.8 ETH',
      collection: 'Vision Series',
      rarity: 'Common'
    }
  ];

  const marketplace = [
    {
      id: 4,
      name: 'Bored Ape #5432',
      image: '/placeholder.svg',
      price: '15.2 ETH',
      seller: '0x742d...5687',
      likes: 234
    },
    {
      id: 5,
      name: 'Moonbird #1847',
      image: '/placeholder.svg',
      price: '3.7 ETH',
      seller: '0x8ba1...5687',
      likes: 89
    },
    {
      id: 6,
      name: 'Azuki #9876',
      image: '/placeholder.svg',
      price: '8.1 ETH',
      seller: '0x1a2b...f12',
      likes: 156
    }
  ];

  const handleMint = () => {
    toast({
      title: "NFT Minted Successfully",
      description: `${mintName} has been minted for ${mintPrice} ETH.`,
    });
    setMintName('');
    setMintPrice('');
  };

  const handleBuy = (nftName: string, price: string) => {
    toast({
      title: "NFT Purchased",
      description: `Successfully bought ${nftName} for ${price}.`,
    });
  };

  const handleSell = (nftName: string) => {
    toast({
      title: "NFT Listed",
      description: `${nftName} has been listed for sale.`,
    });
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case 'epic':
        return 'bg-purple-100 text-purple-800';
      case 'rare':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">NFT Marketplace</h1>
        <div className="flex gap-2">
          <Badge className="bg-blue-100 text-blue-800">
            <Image className="h-3 w-3 mr-1" />
            {myNFTs.length} Owned
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.4 ETH</div>
            <p className="text-xs text-green-600">≈ $24,800</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-blue-600">NFTs sold</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Floor Price</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0.5 ETH</div>
            <p className="text-xs text-gray-600">Lowest in collection</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="collection" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="collection">My Collection</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="mint">Mint NFT</TabsTrigger>
        </TabsList>
        
        <TabsContent value="collection" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {myNFTs.map((nft) => (
              <Card key={nft.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <Image className="h-16 w-16 text-gray-400" />
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold truncate">{nft.name}</h3>
                      <Badge className={getRarityColor(nft.rarity)}>
                        {nft.rarity}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{nft.collection}</p>
                    <p className="font-bold text-lg">{nft.price}</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleSell(nft.name)}
                        className="flex-1"
                      >
                        Sell
                      </Button>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="marketplace" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {marketplace.map((nft) => (
              <Card key={nft.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <Image className="h-16 w-16 text-gray-400" />
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold truncate">{nft.name}</h3>
                    <p className="text-sm text-gray-600 font-mono">{nft.seller}</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-lg">{nft.price}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Heart className="h-4 w-4 mr-1" />
                        {nft.likes}
                      </div>
                    </div>
                    <Button
                      onClick={() => handleBuy(nft.name, nft.price)}
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="mint" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mint New NFT</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Upload your artwork</p>
                <Button variant="outline" className="mt-2">
                  Choose File
                </Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">NFT Name</label>
                  <Input
                    placeholder="Enter NFT name..."
                    value={mintName}
                    onChange={(e) => setMintName(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Price (ETH)</label>
                  <Input
                    placeholder="0.1"
                    value={mintPrice}
                    onChange={(e) => setMintPrice(e.target.value)}
                    type="number"
                    step="0.01"
                  />
                </div>
                
                <Button
                  onClick={handleMint}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  disabled={!mintName || !mintPrice}
                >
                  Mint NFT
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NFT;