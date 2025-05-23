import { useEffect, useState } from 'react';
import Header from './components/Header';
import TopBar from './components/TopBar';
import CarGrid from './components/CarGrid';
import Footer from './components/Footer';
import { getWishlist, updateWishlist } from './utils/localStorageUtils';
import CarDetailModal from './components/CarDetailModal';

function App() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filters, setFilters] = useState({ brand: '', fuel: '', seating: '', price: '' });
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showWishlist, setShowWishlist] = useState(false);

  const carsPerPage = 10;

  useEffect(() => {
    const fetchCars = async () => {
      const res = await fetch('/cars.json');
      const data = await res.json();
      setCars(data);
    };
    fetchCars();
    setWishlist(getWishlist());
  }, []);

  useEffect(() => {
    let filtered = cars;

    if (filters.brand)
      filtered = filtered.filter(car =>
        car.brand.toLowerCase().includes(filters.brand.toLowerCase())
      );
    if (filters.fuel)
      filtered = filtered.filter(car =>
        car.fuel.toLowerCase() === filters.fuel.toLowerCase()
      );
    if (filters.seating)
      filtered = filtered.filter(car => car.seating == filters.seating);
    if (filters.price)
      filtered = filtered.filter(car => car.price <= parseInt(filters.price));

    setFilteredCars(filtered);
    setCurrentPage(1);
  }, [filters, cars]);

  const toggleWishlist = (carId) => {
    const updated = wishlist.includes(carId)
      ? wishlist.filter(id => id !== carId)
      : [...wishlist, carId];
    setWishlist(updated);
    updateWishlist(updated);
  };

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Header />
      <TopBar
        filters={filters}
        onFilterChange={setFilters}
        wishlistCount={wishlist.length}
        onWishlistToggle={() => setShowWishlist(!showWishlist)}
      />
      {showWishlist ? (
        <CarGrid
          cars={cars.filter(car => wishlist.includes(car.id))}
          wishlist={wishlist}
          onWishlistToggle={toggleWishlist}
          onCardClick={setSelectedCar}
        />
      ) : (
        <CarGrid
          cars={currentCars}
          wishlist={wishlist}
          onWishlistToggle={toggleWishlist}
          onCardClick={setSelectedCar}
        />
      )}
      <Footer
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      {selectedCar && (
        <CarDetailModal
          car={selectedCar}
          onClose={() => setSelectedCar(null)} 
        />
      )}
    </div>
  );
}

export default App;
