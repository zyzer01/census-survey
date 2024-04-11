import React from "react";
import Input from "./ui/Input";

const CardInput = () => {
  return (
    <section>
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div className="max-w-md mx-auto md:max-w-sm md:w-96">
          <div className="flex flex-col text-center">
            <h1 className="text-3xl font-semibold tracking-tighter text-gray-900 mb-8">
              New Houshold
              <span className="text-gray-600"> Member</span>
            </h1>
          </div>
          <form>
            <div className="space-y-3">
              <div>
                <Input
                  label="First Name"
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
              <div>
                <Input
                  label="Last Name"
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                />
              </div>
              <div className="col-span-full flex justify-between mt-6">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Prev
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CardInput;
