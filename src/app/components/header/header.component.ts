import { Component, inject, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButton, IonIcon, IonButtons, IonImg, IonText, IonTitle } from '@ionic/angular/standalone';
import { sunnyOutline, moonOutline, desktopOutline, logOutOutline, powerOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { StatusBar } from '@capacitor/status-bar';
import { Capacitor } from '@capacitor/core';
import { getMobilePlatforms } from 'src/app/utils/mobile-platforms';
import { ConsoleService } from 'src/app/services/general/console.service';
import { LocalStorageService } from 'src/app/services/storage/localstorage.service';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonTitle, IonText, IonHeader, IonToolbar, IonButton, IonIcon, IonButtons, IonImg, CommonModule]
})
export class HeaderComponent implements OnInit {
  private readonly consoleService: ConsoleService = inject(ConsoleService);
  private readonly localStorageService: LocalStorageService = inject(LocalStorageService);
  private readonly navCtrl: NavController = inject(NavController);

  theme: 'light' | 'dark' | 'system' = 'dark';

  constructor() {
    addIcons({'sunnyOutline':sunnyOutline,'moonOutline':moonOutline,'desktopOutline':desktopOutline,'powerOutline':powerOutline});
  }

  ngOnInit() {
    this.initializeTheme();
    if (this.isMobileOrInstalled()) {
      this.updateStatusBar();
    }
  }

  toggleTheme() {
    if (this.theme === 'system') {
      this.theme = 'light';
    } else if (this.theme === 'light') {
      this.theme = 'dark';
    } else {
      this.theme = 'system';
    }
    this.applyTheme();
    this.localStorageService.setStorage('theme', this.theme);
    this.consoleService.log(`Theme set to: ${this.theme}, HTML classes: ${document.documentElement.classList}`);
    if (this.isMobileOrInstalled()) {
      this.updateStatusBar();
    }
  }

  private initializeTheme() {
    const savedTheme = this.localStorageService.getStorage('theme') as 'light' | 'dark' | 'system' | null;
    if (!savedTheme) {
      this.theme = 'dark';
      this.localStorageService.setStorage('theme', 'dark');
    } else {
      this.theme = savedTheme;
    }
    this.applyTheme();

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (this.theme === 'system') {
        this.applyTheme();
      }
    });
  }

  private applyTheme() {
    let isDark: boolean;
    if (this.theme === 'system') {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      isDark = isSystemDark;
    } else {
      isDark = this.theme === 'dark';
    }

    document.documentElement.classList.remove('ion-palette-dark');
    if (isDark) {
      document.documentElement.classList.add('ion-palette-dark');
    }
  }

  getThemeIcon(): string {
    if (this.theme === 'light') return 'sunny-outline';
    if (this.theme === 'dark') return 'moon-outline';
    return 'desktop-outline';
  }

  private isMobileOrInstalled(): boolean {
    const isNative = Capacitor.isNativePlatform();
    const platforms = getMobilePlatforms();
    this.consoleService.log(`Platforms detected: [${platforms.join(', ')}], Is Native: ${isNative}`);
    return isNative && platforms.length > 0;
  }

  private updateStatusBar() {
    try {
      StatusBar.setOverlaysWebView({ overlay: false });
    } catch (e) {
      console.error('StatusBar update failed:', e);
    }
  }
}
