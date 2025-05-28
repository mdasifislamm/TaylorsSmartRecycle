import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

export const Layout = ({ children, className = '' }: LayoutProps) => {
  return (
    <div className={`min-h-screen bg-gradient-to-b from-green-50 to-white p-4 ${className}`}>
      <div className="container mx-auto max-w-4xl">
        {children}
      </div>
    </div>
  );
};

export default Layout;