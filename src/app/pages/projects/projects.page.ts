import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonAccordionGroup, IonAccordion, IonItem, IonLabel,
         IonBadge, IonList, IonIcon, IonGrid, IonRow, IonCol, IonAvatar,
         IonSearchbar, IonToolbar, IonChip, IonButton } from '@ionic/angular/standalone';
import { PROJECTS } from './projects.data';
import { Project } from '../../interfaces/projects.interface';
import { hardwareChipOutline, linkOutline, timeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
  standalone: true,
  imports: [IonButton, IonChip, IonToolbar,
    CommonModule,
    FormsModule,
    IonContent,
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
    IonBadge,
    IonList,          // ← RESTORED
    IonIcon,          // ← RESTORED
    IonGrid,          // ← RESTORED
    IonRow,           // ← RESTORED
    IonCol,           // ← RESTORED
    IonAvatar,        // ← RESTORED
    IonSearchbar
  ]
})
export class ProjectsPage implements OnInit {

  projects: Project[] = PROJECTS;
  filteredProjects: Project[] = PROJECTS;
  searchTerm = '';
  openAccordions: string[] = ['0'];

  constructor() {
    addIcons({ hardwareChipOutline, linkOutline, timeOutline });
  }

  ngOnInit() {}

  filterProjects() {
    const term = this.searchTerm.toLowerCase().trim();
    this.filteredProjects = term
      ? this.projects.filter(p =>
          p.title.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.subjects.some(s => s.toLowerCase().includes(term)) ||
          p.overview.toLowerCase().includes(term))
      : this.projects;
  }
}
