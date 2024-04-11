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
      className="block size-8 cursor-pointer rounded-full bg-black shadow-sm has-[:checked]:ring-2 has-[:checked]:ring-black has-[:checked]:ring-offset-2"
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        className="sr-only"
        checked={checked}
      />
      {label}
    </label>
  );
};

export default Radio;
