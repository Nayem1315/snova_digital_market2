import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import InputField from '@/components/InputField';
import Card from '@/components/Card';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <Card glow className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center glow-blue">
            <span className="text-3xl font-bold text-primary-foreground">S</span>
          </div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Create Account</h1>
          <p className="text-muted-foreground">Join Snova Digital Market</p>
        </div>

        <form className="space-y-4">
          <InputField
            label="Full Name"
            type="text"
            placeholder="John Doe"
          />
          <InputField
            label="Email"
            type="email"
            placeholder="your@email.com"
          />
          <InputField
            label="Password"
            type="password"
            placeholder="••••••••"
          />
          <InputField
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
          />

          <div className="flex items-start text-sm">
            <input type="checkbox" className="mr-2 mt-1" />
            <span className="text-muted-foreground">
              I agree to the{' '}
              <Link to="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </span>
          </div>

          <Button variant="primary" size="lg" className="w-full" glow>
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline font-semibold">
              Sign In
            </Link>
          </p>
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-card text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <Button variant="outline">Google</Button>
            <Button variant="outline">GitHub</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Register;
