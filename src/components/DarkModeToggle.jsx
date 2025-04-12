import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="bg-gray-800 text-white px-3 py-1 rounded dark:bg-white dark:text-black"
    >
      {dark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
