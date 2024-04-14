import React from "react";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  handlePageChange,
  totalPages,
}) => {
  return (
    <div className="flex items-center justify-center mt-6 space-x-2">
      <button
        className="text-sm px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-black duration-200"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            className={`text-sm px-3 py-1 border rounded-md focus:outline-none focus:ring-2 ${
              page === currentPage
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-700"
            } focus:ring-black duration-200`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        )
      )}
      <button
        className="text-sm px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-black duration-200"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
