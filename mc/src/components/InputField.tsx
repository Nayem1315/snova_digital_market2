import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-2 text-foreground">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
            'transition-all duration-300',
            'placeholder:text-muted-foreground',
            error && 'border-destructive focus:ring-destructive',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
