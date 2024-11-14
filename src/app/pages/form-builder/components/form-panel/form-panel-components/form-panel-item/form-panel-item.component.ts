import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormFieldItem } from '../../../../interfaces/form-builder';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { HERO_ICONS } from '../../../../../../shared/icons';

@Component({
  selector: 'app-form-panel-item',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  providers: [provideIcons(HERO_ICONS)],
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
