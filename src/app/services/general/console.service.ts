import { inject, Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConsoleService {
  private readonly platform: Platform = inject(Platform);
  private readonly isProd = environment.PRODUCTION;

  // Generic log method, only in dev
  log<T>(message: string, data?: T): void {
    if (!this.isProd) {
      const prefix = this.getPrefix('log');
      if (data !== undefined) {
        console.log(`${prefix} ${message}`, data);
      } else {
        console.log(`${prefix} ${message}`);
      }
    }
  }

  error<T>(message: string, error?: T): void {
    const prefix = this.getPrefix('error');
    if (error !== undefined) {
      console.error(`${prefix} ${message}`, error);
    } else {
      console.error(`${prefix} ${message}`);
    }
  }

  warn<T>(message: string, data?: T): void {
    const prefix = this.getPrefix('warn');
    if (data !== undefined) {
      console.warn(`${prefix} ${message}`, data);
    } else {
      console.warn(`${prefix} ${message}`);
    }
  }

  info<T>(message: string, data?: T): void {
    if (!this.isProd) {
      const prefix = this.getPrefix('info');
      if (data !== undefined) {
        console.info(`${prefix} ${message}`, data);
      } else {
        console.info(`${prefix} ${message}`);
      }
    }
  }

  private getPrefix(level: string): string {
    return `[${this.platform.platforms()}: ${level.toUpperCase()}]`;
  }
}
