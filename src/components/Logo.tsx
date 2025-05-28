import { Leaf } from 'lucide-react';

type LogoProps = {
  size?: 'small' | 'medium' | 'large';
  className?: string;
};

const Logo = ({ size = 'medium', className = '' }: LogoProps) => {
  const sizeClasses = {
    small: 'text-xl',
    medium: 'text-3xl',
    large: 'text-5xl',
  };

  const iconSizes = {
    small: 18,
    medium: 24,
    large: 32,
  };

  return (
    <div className={`flex items-center ${className}`}>
      <Leaf className="text-green-500 mr-2" size={iconSizes[size]} />
      <span className={`font-bold ${sizeClasses[size]} text-gray-800`}>
        Eco<span className="text-green-500">Track</span>
      </span>
    </div>
  );
};

export default Logo;