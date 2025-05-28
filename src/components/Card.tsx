import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;