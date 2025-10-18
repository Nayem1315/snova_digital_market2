import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Star } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 300) + 50,
    image: ['💻', '🎧', '⌚', '🖱️', '⌨️', '📱'][i % 6],
    rating: (Math.random() * 2 + 3).toFixed(1),
    category: ['electronics', 'gaming', 'audio'][i % 3],
  }));

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Shop All Products</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <Card>
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-primary" />
                <h2 className="font-semibold">Filters</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2 text-sm">Category</h3>
                  <div className="space-y-2">
                    {['all', 'electronics', 'gaming', 'audio'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === cat
                            ? 'bg-primary text-primary-foreground'
                            : 'hover:bg-muted'
                        }`}
                      >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2 text-sm">Price Range</h3>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="500"
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>$0</span>
                      <span>$500+</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2 text-sm">Rating</h3>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <button
                        key={rating}
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Star className="w-4 h-4 fill-secondary text-secondary" />
                        <span>{rating}+ Stars</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} products
              </p>
              <select className="px-4 py-2 rounded-lg bg-input border border-border">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <Card hover glow>
                    <div className="text-6xl mb-4 text-center">{product.image}</div>
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-primary font-bold text-xl">
                        ${product.price}
                      </span>
                      <div className="flex items-center text-secondary">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        <span className="text-sm">{product.rating}</span>
                      </div>
                    </div>
                    <Button variant="primary" className="w-full" glow>
                      Add to Cart
                    </Button>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
