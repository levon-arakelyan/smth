import type { LocalStorageKey } from "./local-storage-keys";

export class LocalStorageService {
  private static storage: Storage = localStorage;

  public static set<T>(key: LocalStorageKey, value: T): void {
    try {
      this.storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('LocalStorageService.set error:', error);
    }
  }

  public static get<T = string>(key: LocalStorageKey): T | null {
    try {
      const item = this.storage.getItem(key);
      return item ? JSON.parse(item) as T : null;
    } catch (error) {
      console.error('LocalStorageService.get error:', error);
      return null;
    }
  }

  public static remove(key: LocalStorageKey): void {
    try {
      this.storage.removeItem(key);
    } catch (error) {
      console.error('LocalStorageService.remove error:', error);
    }
  }

  public static clear(): void {
    try {
      this.storage.clear();
    } catch (error) {
      console.error('LocalStorageService.clear error:', error);
    }
  }
}
