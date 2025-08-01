// Simple localStorage wrapper for data persistence

// Check if localStorage is available
const isLocalStorageAvailable = () => {
  try {
    const testKey = '__test__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};

export const storage = {
  get: <T>(key: string, defaultValue: T = null as unknown as T): T => {
    if (!isLocalStorageAvailable()) return defaultValue;
    
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) as T : defaultValue;
    } catch (error) {
      console.error('Error getting data from localStorage:', error);
      return defaultValue;
    }
  },
  
  set: <T>(key: string, value: T): boolean => {
    if (!isLocalStorageAvailable()) return false;
    
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Error setting data in localStorage:', error);
      return false;
    }
  },
  
  remove: (key: string): boolean => {
    if (!isLocalStorageAvailable()) return false;
    
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing data from localStorage:', error);
      return false;
    }
  },
  
  clear: (): boolean => {
    if (!isLocalStorageAvailable()) return false;
    
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      return false;
    }
  }
};