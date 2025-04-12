import CarCard from './CarCard';

const CarGrid = ({ cars, onWishlistToggle, wishlist }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
    {cars.map(car => (
      <CarCard
        key={car.id}
        car={car}
        isWishlisted={wishlist.includes(car.id)}
        onWishlistToggle={onWishlistToggle}
      />
    ))}
  </div>
);

export default CarGrid;
