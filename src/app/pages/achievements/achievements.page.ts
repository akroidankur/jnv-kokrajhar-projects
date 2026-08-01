import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonGrid, IonRow, IonCol, IonToolbar
} from '@ionic/angular/standalone';
import { ACHIEVEMENTS } from './achievements.data';
import { Achievement } from '../../interfaces/achievements.interface';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
  standalone: true,
  imports: [
    IonToolbar, CommonModule, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonGrid, IonRow, IonCol
  ]
})
export class AchievementsPage implements OnInit {

  achievements: Achievement[] = ACHIEVEMENTS.filter(a => a.show);

  ngOnInit() {}
}
