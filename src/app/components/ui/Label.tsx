import React from "react";

const Label: React.FC<LabelProps> = ({label}) => {
  return <label className="leading-7 text-sm text-gray-600">{label}</label>;
};

export default Label;
