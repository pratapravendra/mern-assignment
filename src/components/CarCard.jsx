const CarCard = ({ car, onWishlistToggle, isWishlisted }) => (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
      <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold dark:text-white mt-2">{car.name}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">{car.fuel} • {car.seating} seats</p>
      <p className="text-sm text-gray-600 dark:text-gray-300">Price: ₹{car.price}</p>
      <button
        onClick={() => onWishlistToggle(car.id)}
        className="mt-2 px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600"
      >
        {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
      </button>
    </div>
  );
  
  export default CarCard;
  