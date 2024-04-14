import React from "react";
import { ImSpinner9 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center text-center">
      <ImSpinner9 className="animate-spin w-10 h-10"/>
    </div>
  );
};

export default Loading;
