import { ReactNode } from 'react';

type FormFieldProps = {
  label: string;
  id: string;
  children: ReactNode;
};

const FormField = ({ label, id, children }: FormFieldProps) => {
  return (
    <div className="mb-4">
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      {children}
    </div>
  );
};

export default FormField;