import { Wrench, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '@/components/Card';
import Button from '@/components/Button';

const Maintenance = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <Card glow className="w-full max-w-2xl text-center">
        <div className="w-24 h-24 mx-auto mb-8 bg-gradient-primary rounded-full flex items-center justify-center glow-blue animate-pulse">
          <Wrench className="w-12 h-12 text-primary-foreground" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
          We'll Be Right Back
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          We're currently performing scheduled maintenance to improve your experience.
        </p>
        
        <div className="space-y-4 mb-8">
          <p className="text-muted-foreground">
            Our team is working hard to make things even better. We expect to be back online shortly.
          </p>
          <p className="text-muted-foreground">
            Thank you for your patience!
          </p>
        </div>

        <div className="border-t border-border pt-8 mb-8">
          <h2 className="text-lg font-semibold mb-4">Need Immediate Assistance?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm font-medium mb-1">Email Support</p>
              <a href="mailto:support@snovadigital.com" className="text-primary hover:underline text-sm">
                support@snovadigital.com
              </a>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm font-medium mb-1">Phone Support</p>
              <a href="tel:+15551234567" className="text-primary hover:underline text-sm">
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        <Link to="/">
          <Button variant="primary" glow>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Return to Homepage
          </Button>
        </Link>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>Estimated completion: Within the next hour</p>
        </div>
      </Card>
    </div>
  );
};

export default Maintenance;
