import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import { FormFieldItem } from '../../interfaces/form-builder';

@Component({
  selector: 'app-form-panel-item',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  templateUrl: './form-panel-item.component.html',
  styleUrl: './form-panel-item.component.css',
})
export class FormPanelItemComponent {
  @Input() item: FormFieldItem = {
    label: '',
    icon: '',
    field: {}
  }
}
