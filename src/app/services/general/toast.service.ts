import { inject, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private readonly toastController: ToastController = inject(ToastController);

  constructor() { }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string, durationS: number = 1.5) {
    const toast = await this.toastController.create({
      message,
      duration: durationS * 1000,
      position,
    });

    await toast.present();
  }
}
