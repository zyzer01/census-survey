import React from "react";

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  options,
  onChange,
}) => {
  return (
    <div className="relative">
      <label className="block mb-3 text-sm font-medium text-black">{label}</label>
      <select
        name={name}
        onChange={onChange}
        value={value}
        className="w-full border rounded-lg bg-gray-100 bg-opacity-50 focus:border-zinc-300 border-zinc-300 focus:bg-white focus:ring-2   focus:ring-zinc-300 text-base focus:outline-none outline-none text-gray-900 py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
