import { Target, Users, Zap, Award } from 'lucide-react';
import Card from '@/components/Card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To revolutionize digital commerce by providing cutting-edge technology products that empower and inspire.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse group of passionate tech enthusiasts dedicated to delivering exceptional customer experiences.',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We stay ahead of the curve, constantly exploring and offering the latest technological innovations.',
    },
    {
      icon: Award,
      title: 'Quality Promise',
      description: 'Every product is carefully curated and tested to meet our high standards of quality and performance.',
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold gradient-text mb-6">About Snova Digital</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in the digital age, delivering premium technology products 
            and an unmatched shopping experience since 2024.
          </p>
        </div>

        {/* Story Section */}
        <Card glow className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold gradient-text mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2024, Snova Digital Market emerged from a simple vision: to make 
                cutting-edge technology accessible to everyone. What started as a small online 
                store has grown into a trusted marketplace serving thousands of satisfied customers.
              </p>
              <p className="text-muted-foreground">
                We believe technology should enhance lives, not complicate them. That's why we 
                carefully select every product in our catalog, ensuring it meets our strict 
                standards for quality, innovation, and value.
              </p>
            </div>
            <div className="text-8xl text-center">🚀</div>
          </div>
        </Card>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} hover glow>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 glow-blue">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <Card glow>
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">By the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">10K+</p>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">500+</p>
              <p className="text-muted-foreground">Products</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">50+</p>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">24/7</p>
              <p className="text-muted-foreground">Customer Support</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
