const CarDetailModal = ({ car, onClose }) => {
    if (!car) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-lg w-full relative shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 dark:text-white hover:text-black dark:hover:text-gray-300 text-xl"
          >
            &times;
          </button>
          <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-bold mt-4">{car.name}</h2>
          <p className="text-gray-700 dark:text-gray-300">Brand: {car.brand}</p>
          <p className="text-gray-700 dark:text-gray-300">Fuel Type: {car.fuel}</p>
          <p className="text-gray-700 dark:text-gray-300">Seating: {car.seating}</p>
          <p className="text-gray-700 dark:text-gray-300">Price: ₹{car.price}</p>
          <p className="text-gray-700 dark:text-gray-300 mt-2">Description: {car.description}</p>
        </div>
      </div>
    );
  };
  
  export default CarDetailModal;
  