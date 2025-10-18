import { CreditCard, MapPin, Package } from 'lucide-react';
import Button from '@/components/Button';
import InputField from '@/components/InputField';
import Card from '@/components/Card';

const Checkout = () => {
  const cartTotal = 812.97;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold">Shipping Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="First Name" type="text" placeholder="John" />
                <InputField label="Last Name" type="text" placeholder="Doe" />
                <InputField label="Email" type="email" placeholder="john@example.com" className="md:col-span-2" />
                <InputField label="Phone" type="tel" placeholder="+1 234 567 8900" className="md:col-span-2" />
                <InputField label="Address" type="text" placeholder="123 Main St" className="md:col-span-2" />
                <InputField label="City" type="text" placeholder="New York" />
                <InputField label="Postal Code" type="text" placeholder="10001" />
                <InputField label="Country" type="text" placeholder="United States" className="md:col-span-2" />
              </div>
            </Card>

            {/* Payment Method */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold">Payment Method</h2>
              </div>
              <div className="space-y-4">
                <InputField label="Card Number" type="text" placeholder="1234 5678 9012 3456" />
                <div className="grid grid-cols-2 gap-4">
                  <InputField label="Expiry Date" type="text" placeholder="MM/YY" />
                  <InputField label="CVV" type="text" placeholder="123" />
                </div>
                <InputField label="Cardholder Name" type="text" placeholder="John Doe" />
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card glow>
              <div className="flex items-center gap-3 mb-6">
                <Package className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold gradient-text">Order Summary</h2>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${(cartTotal - 15 - cartTotal * 0.1).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold">$15.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-semibold">${(cartTotal * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Button variant="primary" size="lg" className="w-full mb-4" glow>
                Complete Order
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By completing this order, you agree to our Terms of Service and Privacy Policy
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
