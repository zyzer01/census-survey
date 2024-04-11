import React from "react";

const Input: React.FC<InputProps> = ({ label, type, name, value, pattern, onChange }) => {
    console.log(value);
    
  return (
    <div className="relative">
      <label className="leading-7 text-sm text-gray-600">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        pattern={pattern}
        onChange={onChange}
        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
  );
};

export default Input;
