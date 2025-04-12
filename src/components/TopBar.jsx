import DarkModeToggle from './DarkModeToggle';

const TopBar = ({ filters, onFilterChange, wishlistCount, sortBy, setSortBy }) => {
  const handleInputChange = (e) => {
    onFilterChange({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-wrap items-center justify-between p-4 bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-wrap gap-2">
        <input name="brand" placeholder="Brand" className="p-2 rounded" onChange={handleInputChange} />
        <input name="fuel" placeholder="Fuel Type" className="p-2 rounded" onChange={handleInputChange} />
        <input name="seating" placeholder="Seating" className="p-2 rounded" onChange={handleInputChange} />
        <input name="price" placeholder="Max Price" type="number" className="p-2 rounded" onChange={handleInputChange} />

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="p-2 rounded">
          <option value="">Sort</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="flex gap-4 items-center">
        <button className="relative px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Wishlist
          {wishlistCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full px-2">{wishlistCount}</span>
          )}
        </button>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default TopBar;
