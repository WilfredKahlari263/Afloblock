import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Camera, Edit2, MapPin, Phone, Mail, Calendar, Shield, Wallet } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Profile: React.FC = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Wilfred Munyaradzi Kahlari',
    email: 'wilfred.kahlari@gmail.com',
    phone: '+263772212796',
    location: 'Harare, Zimbabwe',
    joinDate: 'November 2024',
    accountType: 'Premium',
    balance: 'ZWL 2,450.00',
    cryptoBalance: '0.00234 BTC'
  });

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handlePasswordChange = () => {
    toast({
      title: "Password Change",
      description: "Password change functionality activated.",
    });
  };

  const handleTwoFactor = () => {
    toast({
      title: "Two-Factor Authentication",
      description: "2FA setup process initiated.",
    });
  };

  const handlePhotoUpload = () => {
    toast({
      title: "Photo Upload",
      description: "Photo upload functionality activated.",
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold gradient-text">Profile</h1>
        <Button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
          <Edit2 className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <div className="relative mx-auto">
              <Avatar className="h-24 w-24 mx-auto">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="text-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  WMK
                </AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                onClick={handlePhotoUpload}
                className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0 bg-gradient-to-r from-blue-600 to-purple-600"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <CardTitle className="mt-4">{profile.name}</CardTitle>
            <CardDescription className="flex items-center justify-center gap-1">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </CardDescription>
            <Badge className="mt-2 bg-gradient-to-r from-green-500 to-blue-500">
              {profile.accountType} Member
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Wallet className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium">Balance</p>
                <p className="text-sm text-gray-600">{profile.balance}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-purple-600" />
              <div>
                <p className="font-medium">Crypto Balance</p>
                <p className="text-sm text-gray-600">{profile.cryptoBalance}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium">Member Since</p>
                <p className="text-sm text-gray-600">{profile.joinDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Manage your personal details and contact information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    disabled={!isEditing}
                    className={isEditing ? 'border-blue-300' : ''}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    disabled={!isEditing}
                    className={isEditing ? 'border-blue-300' : ''}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    disabled={!isEditing}
                    className={isEditing ? 'border-blue-300' : ''}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <Input
                    id="location"
                    value={profile.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    disabled={!isEditing}
                    className={isEditing ? 'border-blue-300' : ''}
                  />
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Account Security</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" onClick={handlePasswordChange} className="justify-start">
                  <Shield className="mr-2 h-4 w-4" />
                  Change Password
                </Button>
                <Button variant="outline" onClick={handleTwoFactor} className="justify-start">
                  <Phone className="mr-2 h-4 w-4" />
                  Two-Factor Authentication
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;