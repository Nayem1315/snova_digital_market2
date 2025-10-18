import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const BlogDetails = () => {
  const { id } = useParams();

  const post = {
    id,
    title: 'Top 10 Tech Gadgets of 2024',
    author: 'John Smith',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Reviews',
    image: '💻',
    content: `
      <p>The tech landscape is constantly evolving, and 2024 has brought us some truly remarkable innovations. From AI-powered devices to revolutionary sustainable technology, this year's gadgets are pushing the boundaries of what's possible.</p>
      
      <h2>1. AI-Powered Smart Glasses</h2>
      <p>The latest generation of smart glasses combines augmented reality with artificial intelligence to create an immersive experience that seamlessly integrates with your daily life.</p>
      
      <h2>2. Quantum-Enhanced Laptops</h2>
      <p>Processing power has reached new heights with quantum computing integration, making complex tasks lightning-fast and energy-efficient.</p>
      
      <h2>3. Next-Gen Wireless Earbuds</h2>
      <p>With spatial audio, adaptive noise cancellation, and 48-hour battery life, these earbuds redefine portable audio.</p>
      
      <h2>4. Foldable Smartphones 3.0</h2>
      <p>The third generation of foldable phones features ultra-durable screens and seamless app continuity between folded and unfolded modes.</p>
      
      <h2>Conclusion</h2>
      <p>As we continue through 2024, these innovations represent just the beginning of what's possible. The future of technology is here, and it's more accessible than ever.</p>
    `,
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <Card glow>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6">{post.image}</div>
            <div className="mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold gradient-text mb-6">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 text-muted-foreground text-sm">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none mb-8">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex items-center justify-between">
              <Button variant="ghost">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
              <div className="flex gap-4">
                <Button variant="outline">Previous</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Related Posts */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 gradient-text">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} hover>
                <div className="text-4xl mb-3 text-center">🎧</div>
                <h3 className="font-bold mb-2">Related Post Title {i}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Brief description of the related article...
                </p>
                <Link to={`/blog/${i}`}>
                  <Button variant="ghost" size="sm" className="w-full">
                    Read More
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
