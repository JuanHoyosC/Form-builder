import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormPanelSectionListComponent } from './components/form-panel-section-list/form-panel-section-list.component';

@Component({
  selector: 'app-form-panel',
  standalone: true,
  imports: [
    CommonModule,
    FormPanelSectionListComponent,
  ],
  templateUrl: './form-panel.component.html',
  styleUrl: './form-panel.component.scss',
})
export class FormPanelComponent {
  showFormPanelList = input<boolean>(true);
  activeTabIndex = input<number>(0);
}
