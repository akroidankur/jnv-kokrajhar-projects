import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  title: WritableSignal<string> = signal('')

  constructor() { }
}
