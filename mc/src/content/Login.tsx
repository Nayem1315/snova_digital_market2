import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import Button from '@/components/Button';
import InputField from '@/components/InputField';
import Card from '@/components/Card';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <Card glow className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center glow-blue">
            <span className="text-3xl font-bold text-primary-foreground">S</span>
          </div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Login to your account</p>
        </div>

        <form className="space-y-4">
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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-muted-foreground">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-primary hover:underline">
              Forgot password?
            </Link>
          </div>

          <Button variant="primary" size="lg" className="w-full" glow>
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary hover:underline font-semibold">
              Sign Up
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

export default Login;
