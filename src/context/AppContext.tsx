import { createContext, useContext, ReactNode } from 'react';

type AppContextType = {
  studentName: string;
  credits: number;
};

const defaultContext: AppContextType = {
  studentName: 'Lionel Asif',
  credits: 150,
};

const AppContext = createContext<AppContextType>(defaultContext);

export const useAppContext = () => useContext(AppContext);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <AppContext.Provider value={defaultContext}>
      {children}
    </AppContext.Provider>
  );
};