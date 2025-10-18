import { MapPin, Plus, Edit, Trash2 } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const Addresses = () => {
  const addresses = [
    {
      id: 1,
      name: 'Home',
      isDefault: true,
      fullName: 'John Doe',
      phone: '+1 234 567 8900',
      address: '123 Main Street, Apt 4B',
      city: 'New York',
      postal: '10001',
      country: 'United States',
    },
    {
      id: 2,
      name: 'Office',
      isDefault: false,
      fullName: 'John Doe',
      phone: '+1 234 567 8901',
      address: '456 Business Ave, Suite 200',
      city: 'New York',
      postal: '10002',
      country: 'United States',
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <MapPin className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold gradient-text">My Addresses</h1>
          </div>
          <Button variant="primary" glow>
            <Plus className="w-5 h-5 mr-2" />
            Add New Address
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((address) => (
            <Card key={address.id} hover>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg">{address.name}</h3>
                  {address.isDefault && (
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                      Default
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                    <Edit className="w-4 h-4 text-primary" />
                  </button>
                  <button className="p-2 hover:bg-destructive/10 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </button>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <p className="font-semibold text-foreground">{address.fullName}</p>
                <p className="text-muted-foreground">{address.phone}</p>
                <p className="text-muted-foreground">{address.address}</p>
                <p className="text-muted-foreground">
                  {address.city}, {address.postal}
                </p>
                <p className="text-muted-foreground">{address.country}</p>
              </div>

              {!address.isDefault && (
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Set as Default
                </Button>
              )}
            </Card>
          ))}

          {/* Add New Card */}
          <Card hover className="border-2 border-dashed border-border cursor-pointer flex items-center justify-center min-h-[250px]">
            <div className="text-center">
              <Plus className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-semibold mb-2">Add New Address</p>
              <p className="text-sm text-muted-foreground">Click to add a new delivery address</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
