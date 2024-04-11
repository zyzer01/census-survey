import React from "react";
import { FaTrash, FaEye } from "react-icons/fa"; 
import { GoArrowRight } from "react-icons/go"

const DashboardCard: React.FC<DashboardCardProps> = ({houseHoldId, firstName, lastName, sex, dob}) => {
    const formatString = (str: string) => {
        return str.toLowerCase().replace(/(^|\s)\S/g, (firstLetter) =>
          firstLetter.toUpperCase()
        );
      };
  return (
    <div className="border rounded-2xl p-4">
      <div>
        <span className="flex items-center justify-center bg-gray-100 rounded-full size-12">
          {houseHoldId}
        </span>
      </div>
      <div className="mt-6">
        <h3 className="text-base text-gray-900">{formatString(firstName)} {formatString(lastName)}</h3>
        <ul className="flex flex-col space-y-2 mt-2">
          <li><span className="bold text-gray-900">Sex:</span> {formatString(sex)}</li>
          <li><span className="bold text-gray-900">DOB:</span> {dob}</li>
        </ul>
        <div className="mt-4 flex justify-between">
        <button className=" text-gray-700 hover:text-red-500">
            <FaTrash />
          </button>
          <button className=" text-black hover:text-gray-600 flex items-center gap-x-1">
            View <GoArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
