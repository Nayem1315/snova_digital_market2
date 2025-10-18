import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const BlogListing = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Tech Gadgets of 2024',
      excerpt: 'Discover the most innovative and game-changing tech products that are reshaping our digital world this year.',
      author: 'John Smith',
      date: '2024-01-15',
      category: 'Reviews',
      image: '💻',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'The Future of Wireless Audio',
      excerpt: 'Exploring the latest advancements in wireless audio technology and what it means for music lovers.',
      author: 'Sarah Johnson',
      date: '2024-01-20',
      category: 'Technology',
      image: '🎧',
      readTime: '4 min read',
    },
    {
      id: 3,
      title: 'Smart Home Setup Guide',
      excerpt: 'A comprehensive guide to setting up your smart home ecosystem for maximum convenience and efficiency.',
      author: 'Mike Davis',
      date: '2024-01-25',
      category: 'Guides',
      image: '🏠',
      readTime: '8 min read',
    },
    {
      id: 4,
      title: 'Gaming PC Build Tips',
      excerpt: 'Essential tips and tricks for building your dream gaming PC on any budget.',
      author: 'Emma Wilson',
      date: '2024-02-01',
      category: 'Gaming',
      image: '🎮',
      readTime: '6 min read',
    },
    {
      id: 5,
      title: 'Wearable Tech Revolution',
      excerpt: 'How wearable technology is transforming health, fitness, and daily productivity.',
      author: 'Alex Brown',
      date: '2024-02-05',
      category: 'Health',
      image: '⌚',
      readTime: '5 min read',
    },
    {
      id: 6,
      title: 'Cybersecurity Essentials',
      excerpt: 'Protect your digital life with these essential cybersecurity practices and tools.',
      author: 'David Lee',
      date: '2024-02-10',
      category: 'Security',
      image: '🔒',
      readTime: '7 min read',
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Our Blog</h1>
          <p className="text-xl text-muted-foreground">
            Latest news, reviews, and insights from the tech world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} hover glow>
              <div className="text-6xl mb-4 text-center">{post.image}</div>
              <div className="mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {post.category}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
                <span>{post.readTime}</span>
              </div>
              <Link to={`/blog/${post.id}`}>
                <Button variant="ghost" size="sm" className="w-full">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
