import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { FormFieldItem } from '../../../../types/form-builder.types';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { HERO_ICONS } from '../../../../../../shared/icons';

@Component({
  selector: 'app-form-panel-item',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  providers: [provideIcons(HERO_ICONS)],
  templateUrl: './form-panel-item.component.html',
})
export class FormPanelItemComponent {
  item = input.required<FormFieldItem>()
}
