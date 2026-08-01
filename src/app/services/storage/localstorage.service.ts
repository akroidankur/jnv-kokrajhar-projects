import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  setStorage(key: string, data: string): void {
    localStorage.setItem(key, data);
  }

  getStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  removeStorage(key: string): void {
    localStorage.removeItem(key);
  }

  clearStorage(): void {
    const themeValue = localStorage.getItem('theme'); // Match HeaderComponent key
    localStorage.clear();
    if (themeValue !== null) {
      localStorage.setItem('theme', themeValue); // Preserve theme
    }
  }
}
