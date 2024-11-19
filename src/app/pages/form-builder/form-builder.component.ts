import { Component, inject } from '@angular/core';
import { FormPanelComponent } from './components/form-panel/form-panel.component';
import { FormFieldCanvasComponent } from './components/form-field-canvas/form-field-canvas.component';
import { FormFieldSettingsComponent } from './components/form-field-settings/form-field-settings.component';
import { HistoryButtonsComponent } from './components/form-field-canvas/form-canvas-components/history-buttons/history-buttons.component';
import { FormBuilderTypesService } from './services/form-builder.service';
import { CommonModule } from '@angular/common';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [
    CommonModule,
    FormPanelComponent,
    FormFieldCanvasComponent,
    HistoryButtonsComponent,
    FormFieldSettingsComponent,
  ],
  providers: [DialogService],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css',
})
export class FormBuilderComponent {
  formBuilderTypesService = inject(FormBuilderTypesService)
  constructor(public dialogService: DialogService) {
  }
  
  open() {
  

  }
}
