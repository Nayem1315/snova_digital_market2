import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import Button from '@/components/Button';
import Card from '@/components/Card';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Wireless Headphones', price: 199, quantity: 1, image: '🎧' },
    { id: 2, name: 'Smart Watch', price: 299, quantity: 2, image: '⌚' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 15;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{item.image}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                    <p className="text-primary font-bold">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border rounded-lg">
                      <button className="p-2 hover:bg-muted transition-colors">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button className="p-2 hover:bg-muted transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div>
            <Card glow>
              <h2 className="text-xl font-bold mb-4 gradient-text">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Link to="/checkout">
                <Button variant="primary" size="lg" className="w-full" glow>
                  Proceed to Checkout
                </Button>
              </Link>
              <Link to="/shop">
                <Button variant="ghost" className="w-full mt-4">
                  Continue Shopping
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
