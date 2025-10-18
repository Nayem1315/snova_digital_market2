import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', glow = false, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-primary text-primary-foreground hover:brightness-110 active:scale-95',
      secondary: 'bg-secondary text-secondary-foreground hover:brightness-110 active:scale-95',
      accent: 'bg-accent text-accent-foreground hover:brightness-110 active:scale-95',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground active:scale-95',
      ghost: 'text-foreground hover:bg-muted active:scale-95',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const glowClass = glow ? 'glow-blue' : '';

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], glowClass, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
