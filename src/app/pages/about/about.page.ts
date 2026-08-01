import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonButton, IonIcon, IonToolbar, IonText } from '@ionic/angular/standalone';
import { globeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonText,
    IonToolbar, CommonModule, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonButton, IonIcon
  ]
})
export class AboutPage implements OnInit {

  constructor() {
    addIcons({ globeOutline });
  }

  ngOnInit() {}
}
