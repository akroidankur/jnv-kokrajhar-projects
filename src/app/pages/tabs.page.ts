import { Component, inject, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTabs, IonIcon, IonTabBar, IonTabButton, IonLabel, NavController } from '@ionic/angular/standalone';
import {
  folderOpenOutline,
  trophyOutline,
  informationCircleOutline
} from 'ionicons/icons';
import { addIcons } from 'ionicons';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { TabService } from '../services/general/tabs.service';
import { ConsoleService } from '../services/general/console.service';

@Component({
  selector: 'app-web-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonTabButton,
    IonTabBar,
    IonIcon,
    IonTabs,
    CommonModule,
    FormsModule,
    HeaderComponent
  ]
})
export class TabsPage implements OnInit, OnDestroy {
  private tabService: TabService = inject(TabService);
  private navCtrl = inject(NavController);
  private readonly consoleService: ConsoleService = inject(ConsoleService);


  @ViewChild('tabs', { static: false }) tabs?: IonTabs;

  constructor() {
    addIcons({
      folderOpenOutline,
      trophyOutline,
      informationCircleOutline
    });
    this.tabService.selectedTab$.subscribe(tab => {
      if (this.tabs) {
        this.tabs.select(tab);
      }
    });
  }

  async ngOnInit() {
    this.tabService.selectTab('projects');
    await this.navCtrl.navigateRoot('/tabs/projects');
  }

  ngOnDestroy() {
    this.consoleService.log('TabsPage: ngOnDestroy, disconnecting WebSocket');
  }
}
