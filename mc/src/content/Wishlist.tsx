import { Heart, ShoppingCart, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '@/components/Card';
import Button from '@/components/Button';

const Wishlist = () => {
  const wishlistItems = [
    { id: 1, name: 'Wireless Headphones Pro', price: 299, image: '🎧', inStock: true },
    { id: 2, name: 'Smart Watch Ultra', price: 399, image: '⌚', inStock: true },
    { id: 3, name: 'Gaming Keyboard RGB', price: 149, image: '⌨️', inStock: false },
    { id: 4, name: 'Mechanical Mouse', price: 79, image: '🖱️', inStock: true },
    { id: 5, name: 'USB-C Hub', price: 49, image: '🔌', inStock: true },
    { id: 6, name: 'Laptop Stand', price: 59, image: '💻', inStock: true },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-primary fill-current" />
          <h1 className="text-4xl font-bold gradient-text">My Wishlist</h1>
        </div>

        {wishlistItems.length === 0 ? (
          <Card className="text-center py-12">
            <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">Start adding products you love!</p>
            <Link to="/shop">
              <Button variant="primary" glow>Browse Products</Button>
            </Link>
          </Card>
        ) : (
          <>
            <div className="mb-6 flex justify-between items-center">
              <p className="text-muted-foreground">{wishlistItems.length} items in your wishlist</p>
              <Button variant="ghost">Clear All</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <Card key={item.id} hover>
                  <button className="absolute top-4 right-4 p-2 bg-destructive/10 text-destructive rounded-full hover:bg-destructive/20 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                  <Link to={`/product/${item.id}`}>
                    <div className="text-6xl mb-4 text-center">{item.image}</div>
                    <h3 className="font-semibold mb-2">{item.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-primary font-bold text-xl">${item.price}</span>
                      {!item.inStock && (
                        <span className="text-xs text-destructive">Out of Stock</span>
                      )}
                    </div>
                  </Link>
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full"
                    glow
                    disabled={!item.inStock}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {item.inStock ? 'Add to Cart' : 'Unavailable'}
                  </Button>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
