import { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import Button from '@/components/Button';
import Card from '@/components/Card';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    name: 'Premium Wireless Headphones',
    price: 199,
    rating: 4.8,
    reviews: 156,
    description: 'Experience superior sound quality with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium comfort design.',
    images: ['🎧', '🎵', '🔊', '🎶'],
    features: [
      'Active Noise Cancellation',
      '30-hour Battery Life',
      'Premium Comfort Design',
      'HD Audio Quality',
      'Bluetooth 5.0',
      'Fast Charging',
    ],
    inStock: true,
  };

  const reviews = [
    { author: 'John D.', rating: 5, comment: 'Amazing sound quality! Best purchase ever.', date: '2 days ago' },
    { author: 'Sarah M.', rating: 4, comment: 'Great headphones, comfortable for long use.', date: '1 week ago' },
    { author: 'Mike R.', rating: 5, comment: 'Excellent noise cancellation, worth the price.', date: '2 weeks ago' },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <Card glow className="mb-4">
              <div className="text-[200px] text-center">{product.images[selectedImage]}</div>
            </Card>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedImage === idx
                      ? 'border-primary glow-blue'
                      : 'border-border hover:border-primary'
                  }`}
                >
                  <div className="text-4xl">{img}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4 gradient-text">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-secondary text-secondary'
                        : 'text-muted'
                    }`}
                  />
                ))}
                <span className="ml-2 text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-primary">${product.price}</span>
              <span className="ml-2 text-muted-foreground line-through">$299</span>
            </div>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            <div className="mb-6">
              <h3 className="font-semibold mb-3">Key Features:</h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-muted transition-colors"
                >
                  -
                </button>
                <span className="px-6 py-2 border-x border-border">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-muted transition-colors"
                >
                  +
                </button>
              </div>
              <span className={product.inStock ? 'text-secondary' : 'text-destructive'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="flex gap-4 mb-8">
              <Button variant="primary" size="lg" glow className="flex-1">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 border border-border rounded-lg">
                <Truck className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Free Shipping</p>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <Shield className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">2 Year Warranty</p>
              </div>
              <div className="text-center p-4 border border-border rounded-lg">
                <RotateCcw className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">30 Day Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <Card>
          <h2 className="text-2xl font-bold mb-6 gradient-text">Customer Reviews</h2>
          <div className="space-y-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="border-b border-border pb-6 last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{review.author}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'fill-secondary text-secondary'
                              : 'text-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-muted-foreground">{review.comment}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetails;
