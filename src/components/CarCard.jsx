const CarCard = ({ car, onClick, onWishlistToggle, isWished }) => (
  <div
    onClick={() => onClick(car)}l
    className="border p-4 rounded shadow hover:shadow-lg cursor-pointer bg-white dark:bg-gray-800 transition"
  >
    <img src={car.image} alt={car.name} className="h-40 w-full object-cover rounded" />
    <div className="mt-2">
      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{car.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300">₹{car.price}</p>
      <button
        onClick={(e) => {
          e.stopPropagation(); 
          onWishlistToggle(car.id);
        }}
        className={`mt-2 text-sm px-2 py-1 rounded ${
          isWished ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'
        }`}
      >
        {isWished ? 'Remove from Wishlist' : 'Add to Wishlist'}
      </button>
    </div>
  </div>
);
export default CarCard

  