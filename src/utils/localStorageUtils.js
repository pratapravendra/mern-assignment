export const getWishlist = () => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('wishlist') || '[]');
    }
    return [];
  };
  
  export const updateWishlist = (newList) => {
    localStorage.setItem('wishlist', JSON.stringify(newList));
  };
  