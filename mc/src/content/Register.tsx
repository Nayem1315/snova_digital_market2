import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '@/components/Button';
import InputField from '@/components/InputField';
import Card from '@/components/Card';

const registerSchema = z
  .object({
    fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters.' }),
    confirmPassword: z.string(),
    agreedToTerms: z.boolean().refine((val) => val === true, {
      message: 'You must agree to the terms and policy.',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'], // path of error
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log('Form submitted!', data);
    // Here you would typically handle the API call for registration
  };

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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputField
            label="Full Name"
            type="text"
            placeholder="John Doe"
            {...register('fullName')}
            error={errors.fullName?.message}
          />
          <InputField
            label="Email"
            type="email"
            placeholder="your@email.com"
            {...register('email')}
            error={errors.email?.message}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="••••••••"
            {...register('password')}
            error={errors.password?.message}
          />
          <InputField
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />

          <div className="flex items-start text-sm">
            <div className="flex items-center h-5">
              <input id="terms" type="checkbox" {...register('agreedToTerms')} className="mr-2" />
            </div>
            <div className="ml-2 text-sm">
              <label htmlFor="terms" className="text-muted-foreground">
                I agree to the{' '}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </label>
              {errors.agreedToTerms && <p className="text-destructive text-xs mt-1">{errors.agreedToTerms.message}</p>}
            </div>
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full" glow>
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
