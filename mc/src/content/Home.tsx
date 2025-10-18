import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Shield, TrendingUp } from 'lucide-react';
import Button from '@/components/Button';
import Card from '@/components/Card';

const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'Wireless Headphones', price: 199, image: '🎧', rating: 4.8 },
    { id: 2, name: 'Smart Watch', price: 299, image: '⌚', rating: 4.9 },
    { id: 3, name: 'Gaming Mouse', price: 89, image: '🖱️', rating: 4.7 },
    { id: 4, name: 'Mechanical Keyboard', price: 159, image: '⌨️', rating: 4.9 },
  ];

  const categories = [
    { name: 'Electronics', icon: '💻', count: 120 },
    { name: 'Gaming', icon: '🎮', count: 85 },
    { name: 'Audio', icon: '🎵', count: 95 },
    { name: 'Accessories', icon: '📱', count: 150 },
  ];

  const features = [
    { icon: Zap, title: 'Fast Delivery', desc: 'Lightning-fast shipping worldwide' },
    { icon: Shield, title: 'Secure Payment', desc: 'Your data is always protected' },
    { icon: Star, title: 'Top Quality', desc: 'Premium products guaranteed' },
    { icon: TrendingUp, title: 'Best Prices', desc: 'Competitive pricing always' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-dark opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text glow-text-blue">
                Welcome to Snova
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Discover cutting-edge tech products with neon-powered shopping experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button variant="primary" size="lg" glow>
                  Start Shopping
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} to="/shop">
              <Card hover glow className="text-center">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {category.count} Products
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold gradient-text">Featured Products</h2>
          <Link to="/shop">
            <Button variant="ghost">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card hover glow>
                <div className="text-6xl mb-4 text-center">{product.image}</div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-xl">
                    ${product.price}
                  </span>
                  <div className="flex items-center text-secondary">
                    <Star className="w-4 h-4 fill-current mr-1" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
            Why Choose Snova?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center glow-blue">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 container mx-auto px-4">
        <Card glow className="text-center bg-gradient-dark">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Ready to Experience the Future?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover premium tech products.
          </p>
          <Link to="/register">
            <Button variant="primary" size="lg" glow>
              Create Account
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </Card>
      </section>
    </div>
  );
};

export default Home;
