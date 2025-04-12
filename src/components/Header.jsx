import image from "../assets/logo.png"
const Header = () => (
    <header className="flex items-center justify-between p-4 shadow bg-white dark:bg-gray-800">
      <div className="flex items-center space-x-2">
        <img src={image} alt="Logo" className="w-20 h-20" />
        <h1 className="text-2xl font-bold dark:text-white">Car Finder</h1>
      </div>
    </header>
  );
  
  export default Header;
  