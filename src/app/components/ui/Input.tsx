import React from "react";

const Input: React.FC<InputProps> = ({ label, id, type, name, value, pattern, placeholder, onChange }) => {
    console.log(value);
    
  return (
    <div className="relative">
      <label className="block mb-3 text-sm font-medium text-black">{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        pattern={pattern}
        placeholder={placeholder}
        onChange={onChange}
        className="block w-full font-semibold h-12 px-4 py-2 text-gray-900 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm leading-8 transition-colors ease-in-out"
      />
    </div>
  );
};

export default Input;
