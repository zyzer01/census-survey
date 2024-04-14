import React, { useState } from "react";


const Modal: React.FC<ModalProps> = ({
  modalTitle,
  modalMessage,
  primaryButton,
  color,
  showModal,
  setShowModal,
  buttonLoading,
  handleDeleteMember,
  selectedMember,
}) => {
  const colorVariants: ColorVariants = {
    green:
      "bg-green-600 text-white active:bg-green-700 text-sm px-2 py-2 rounded-lg",
    red: "bg-red-600 text-white active:bg-red-700 text-sm px-2 py-2 rounded-lg",
  };

  return (
    <div>
      {showModal && (
        <>
          <div className="px-16 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-lg">
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between px-6 pt-4 rounded-t">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {modalTitle}
                  </h3>
                </div>
                <div className="relative px-6 md:py-2 flex-auto">
                  <p className="my-4 text-blueGray-500 text-sm leading-relaxed">
                    {modalMessage}
                  </p>
                </div>
                <div className="flex items-center justify-end px-6 py-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-gray-700 background-transparent px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className={`${colorVariants[color]}`}
                    type="button"
                    onClick={() => {
                      if (selectedMember) {
                        handleDeleteMember(selectedMember.id.toString());
                        setShowModal(false);
                      }
                    }}
                  >
                    {buttonLoading ? "Deleting" : primaryButton}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
};

export default Modal;
