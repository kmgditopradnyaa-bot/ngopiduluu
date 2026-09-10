/* ==========================================================================
   NgopiDuluu - LocalStorage Helper Utility
   ========================================================================== */

const STORAGE_KEYS = {
  THEME: 'ngopiduluu_theme',
  CART: 'ngopiduluu_cart',
  FAVORITES: 'ngopiduluu_favorites'
};

const StorageService = {
  // Theme Storage
  getTheme() {
    return localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
  },
  setTheme(theme) {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  },

  // Cart Storage
  getCart() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CART);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading cart from localStorage', e);
      return [];
    }
  },
  setCart(cartItems) {
    try {
      localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Error saving cart to localStorage', e);
    }
  },

  // Favorites Storage
  getFavorites() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading favorites from localStorage', e);
      return [];
    }
  },
  toggleFavorite(id) {
    const favorites = this.getFavorites();
    const index = favorites.indexOf(id);
    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(id);
    }
    localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    return favorites;
  },
  isFavorite(id) {
    return this.getFavorites().includes(id);
  }
};
