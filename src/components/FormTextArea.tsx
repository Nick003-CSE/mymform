import React from 'react';

interface FormTextAreaProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
  rows?: number;
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
  id,
  label,
  value,
  onChange,
  required = false,
  placeholder = '',
  className = '',
  rows = 3,
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-white mb-1"
      >
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-300"
      />
    </div>
  );
};

export default FormTextArea;