import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps {
  id: string;
  label: string;
  options: Option[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  className?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({
  id,
  label,
  options,
  value,
  onChange,
  required = false,
  className = '',
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
      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white appearance-none [&>option]:text-gray-800 [&>option]:bg-white"
        style={{ backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')", 
          backgroundRepeat: "no-repeat", 
          backgroundPosition: "right 0.7em top 50%", 
          backgroundSize: "0.65em auto", 
          paddingRight: "2.5em" 
        }}
      >
        <option value="" className="bg-white text-gray-800">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-white text-gray-800">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;