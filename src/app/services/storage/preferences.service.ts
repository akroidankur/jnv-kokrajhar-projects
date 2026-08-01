import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  constructor() { }

  async setStorage(key: string, data: string): Promise<void> {
    await Preferences.set({ key, value: data });
  }

  async getStorage(key: string): Promise<string | null> {
    const { value } = await Preferences.get({ key });
    return value;
  }

  async removeStorage(key: string): Promise<void> {
    await Preferences.remove({ key });
  }

  async clearStorage(): Promise<void> {
    const themeValue = await this.getStorage('theme'); // Match HeaderComponent key
    await Preferences.clear();
    if (themeValue !== null) {
      await this.setStorage('theme', themeValue); // Preserve theme
    }
  }
}
