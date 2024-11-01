import { Component } from '@angular/core';
import { FormPanelComponent } from './components/form-panel/form-panel.component';
import { FormFieldCanvasComponent } from './components/form-field-canvas/form-field-canvas.component';
import { FormFieldSettingsComponent } from './components/form-field-settings/form-field-settings.component';

@Component({
  selector: 'app-form-builder',
  standalone: true,
  imports: [
    FormPanelComponent,
    FormFieldCanvasComponent,
    FormFieldSettingsComponent,
  ],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.css',
})
export class FormBuilderComponent {}
