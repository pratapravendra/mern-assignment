const Footer = ({ currentPage, totalPages, onPageChange }) => (
    <div className="flex justify-center items-center p-4 bg-gray-100 dark:bg-gray-900">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-2 bg-gray-300 dark:bg-gray-700 rounded"
      >
        Prev
      </button>
      <span className="text-gray-700 dark:text-white">Page {currentPage} of {totalPages}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-2 bg-gray-300 dark:bg-gray-700 rounded"
      >
        Next
      </button>
    </div>
  );
  
  export default Footer;
  