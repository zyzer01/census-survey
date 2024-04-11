import React from "react";

const Radio: React.FC<RadioProps> = ({
  id,
  label,
  name,
  value,
  checked,
  htmlFor,
}) => {
  return (
    <label
    htmlFor={htmlFor}
    className="flex items-center space-x-2 cursor-pointer"
  >
    <input
      id={id}
      type="radio"
      name={name}
      value={value}
      className="sr-only"
      checked={checked}
    />
    <span className="block size-3 cursor-pointer rounded-full bg-white shadow-sm has-[:checked]:bg-black has-[:checked]:ring-2 has-[:checked]:ring-black has-[:checked]:ring-offset-2"></span>
    <span>{label}</span>
  </label>
  
  );
};

export default Radio;
