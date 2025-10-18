import { Link } from 'react-router-dom';
import { User, ShoppingBag, Heart, MapPin, Settings, LogOut } from 'lucide-react';
import Card from '@/components/Card';

const Dashboard = () => {
  const menuItems = [
    { icon: ShoppingBag, label: 'Orders', path: '/orders', count: 3 },
    { icon: Heart, label: 'Wishlist', path: '/wishlist', count: 12 },
    { icon: MapPin, label: 'Addresses', path: '/addresses', count: 2 },
    { icon: Settings, label: 'Account Details', path: '/account-details' },
    { icon: LogOut, label: 'Logout', path: '/logout' },
  ];

  const recentOrders = [
    { id: '#ORD-2024-001', date: '2024-01-15', total: 299.99, status: 'Delivered' },
    { id: '#ORD-2024-002', date: '2024-01-20', total: 199.99, status: 'Shipped' },
    { id: '#ORD-2024-003', date: '2024-01-25', total: 499.99, status: 'Processing' },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 gradient-text">My Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Menu */}
          <div className="lg:col-span-1">
            <Card>
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center glow-blue">
                  <User className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-bold text-lg">John Doe</h2>
                  <p className="text-sm text-muted-foreground">john@example.com</p>
                </div>
              </div>
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-primary" />
                      <span>{item.label}</span>
                    </div>
                    {item.count && (
                      <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                        {item.count}
                      </span>
                    )}
                  </Link>
                ))}
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card hover>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Total Orders</span>
                  <ShoppingBag className="w-5 h-5 text-primary" />
                </div>
                <p className="text-3xl font-bold gradient-text">12</p>
              </Card>
              <Card hover>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Total Spent</span>
                  <span className="text-primary text-2xl">$</span>
                </div>
                <p className="text-3xl font-bold gradient-text">2,499</p>
              </Card>
              <Card hover>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Wishlist Items</span>
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <p className="text-3xl font-bold gradient-text">12</p>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card>
              <h2 className="text-xl font-bold mb-6 gradient-text">Recent Orders</h2>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div>
                      <p className="font-semibold">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">${order.total}</p>
                      <p className="text-sm text-muted-foreground">{order.status}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/orders">
                <button className="w-full mt-4 p-3 text-primary hover:bg-muted rounded-lg transition-colors">
                  View All Orders
                </button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
