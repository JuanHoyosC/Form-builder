import { Component, inject, signal } from '@angular/core';
import { FormPanelComponent } from './components/form-panel/form-panel.component';
import { FormFieldCanvasComponent } from './components/form-field-canvas/form-field-canvas.component';
import { FormFieldSettingsComponent } from './components/form-field-settings/form-field-settings.component';
import { HistoryButtonsComponent } from './components/form-field-canvas/form-canvas-components/history-buttons/history-buttons.component';
import { FormBuilderTypesService } from './services/form-builder.service';
import { CommonModule } from '@angular/common';
import { DialogService } from 'primeng/dynamicdialog';
import { ConditionalComponent } from '../../shared/components/conditional/conditional.component';
import { FormPanelMenuComponent } from './components/form-panel/form-panel-components/form-panel-menu/form-panel-menu.component';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [
    CommonModule,
    FormPanelComponent,
    FormFieldCanvasComponent,
    HistoryButtonsComponent,
    FormPanelMenuComponent,
    FormFieldSettingsComponent,
  ],
  providers: [DialogService],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css',
})
export class FormBuilderComponent {
  showFormPanelList = signal<boolean>(true);
  activeTabIndex = signal<number>(0);
  formBuilderTypesService = inject(FormBuilderTypesService)
  constructor(public dialogService: DialogService) {
  }
  
  open() {
    this.dialogService.open(ConditionalComponent, {
      header: 'Conditions'
    })

  }
}
