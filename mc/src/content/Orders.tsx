import { Package, Eye } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const Orders = () => {
  const orders = [
    {
      id: '#ORD-2024-001',
      date: '2024-01-15',
      items: 3,
      total: 299.99,
      status: 'Delivered',
      products: ['Wireless Headphones', 'Smart Watch', 'USB Cable'],
    },
    {
      id: '#ORD-2024-002',
      date: '2024-01-20',
      items: 2,
      total: 199.99,
      status: 'Shipped',
      products: ['Keyboard', 'Mouse'],
    },
    {
      id: '#ORD-2024-003',
      date: '2024-01-25',
      items: 1,
      total: 499.99,
      status: 'Processing',
      products: ['Gaming Laptop'],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-500/10 text-green-500';
      case 'Shipped':
        return 'bg-blue-500/10 text-blue-500';
      case 'Processing':
        return 'bg-yellow-500/10 text-yellow-500';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Package className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold gradient-text">My Orders</h1>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id} hover>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-bold text-lg mb-1">{order.id}</h3>
                  <p className="text-sm text-muted-foreground">
                    Placed on {order.date} • {order.items} items
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                  <span className="font-bold text-primary text-xl">${order.total}</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 mb-4">
                <p className="text-sm text-muted-foreground mb-2">Products:</p>
                <div className="flex flex-wrap gap-2">
                  {order.products.map((product, index) => (
                    <span key={index} className="px-3 py-1 bg-muted rounded-lg text-sm">
                      {product}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="primary" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  Track Order
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
