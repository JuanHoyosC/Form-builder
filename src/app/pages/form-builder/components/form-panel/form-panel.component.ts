import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormPanelSectionListComponent } from './form-panel-components/form-panel-section-list/form-panel-section-list.component';
import { MenuComponent } from './form-panel-components/menu/menu.component';

@Component({
  selector: 'app-form-panel',
  standalone: true,
  imports: [
    CommonModule,
    FormPanelSectionListComponent,
    MenuComponent,
  ],
  templateUrl: './form-panel.component.html',
  styleUrl: './form-panel.component.scss',
})
export class FormPanelComponent {
  showFormPanelList = true;
  activeTabIndex = 0;
}
