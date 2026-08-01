import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private selectedTab = new BehaviorSubject<string>('log-in');
  selectedTab$ = this.selectedTab.asObservable();

  constructor() { }

  selectTab(tab: string) {
    this.selectedTab.next(tab);
  }
}
