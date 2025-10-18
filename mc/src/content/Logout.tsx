import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth tokens/session data here
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <Card glow className="w-full max-w-md text-center">
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center glow-blue">
          <LogOut className="w-8 h-8 text-primary-foreground" />
        </div>
        <h1 className="text-3xl font-bold gradient-text mb-4">Logout</h1>
        <p className="text-muted-foreground mb-8">
          Are you sure you want to logout from your account?
        </p>
        <div className="flex gap-4">
          <Button variant="outline" className="flex-1" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button variant="primary" className="flex-1" glow onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Logout;
