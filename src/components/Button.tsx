import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
};

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  fullWidth = false,
  onClick 
}: ButtonProps) => {
  const baseClasses = 'py-3 px-6 rounded-full font-medium transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50';
  
  const variantClasses = {
    primary: 'bg-green-400 hover:bg-green-500 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-white hover:bg-gray-50 text-green-600 border border-green-200 shadow-sm hover:shadow',
    outline: 'bg-transparent hover:bg-green-50 text-green-600 border border-green-300',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;