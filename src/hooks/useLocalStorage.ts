import { useState, useEffect, useCallback } from 'react';
import { LocalStorageKey } from '../core/services/local-storage/local-storage-keys';

export function useLocalStorage<T>(key: LocalStorageKey, defaultValue: T) {
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

  useEffect(() => {
    try {
      localStorage.setItem(key, btoa(JSON.stringify(storedValue)));
    } catch (error) {
      console.error('useLocalStorage write error:', error);
    }
  }, [key, storedValue]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === key) {
        setStoredValue(readValue());
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [key, readValue]);

  return [storedValue, setStoredValue] as const;
}
