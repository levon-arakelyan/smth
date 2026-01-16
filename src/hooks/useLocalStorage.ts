import { useState, useEffect, useCallback } from 'react';

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const readValue = useCallback((): T => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(atob(item)) as T) : defaultValue;
    } catch (error) {
      console.error('useLocalStorage read error:', error);
      return defaultValue;
    }
  }, [key, defaultValue]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue = useCallback((value: T) => {
    try {
      localStorage.setItem(key, btoa(JSON.stringify(value)));
      setStoredValue(value);
      window.dispatchEvent(new Event('local-storage'));
    } catch (error) {
      console.error('useLocalStorage write error:', error);
    }
  }, [key]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === key) {
        setStoredValue(readValue());
      }
    };

    const handleCustomEvent = () => {
      setStoredValue(readValue());
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener('local-storage', handleCustomEvent);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('local-storage', handleCustomEvent);
    };
  }, [key, readValue]);

  return [storedValue, setValue] as const;
}
