import React from "react";

const Label: React.FC<LabelProps> = ({label}) => {
  return <label className="block mb-3 text-sm font-medium text-black">{label}</label>;
};

export default Label;
