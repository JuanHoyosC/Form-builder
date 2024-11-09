import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormFieldItem } from '../../../../interfaces/form-builder';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  ionCallOutline,
  ionRadioButtonOnOutline,
  ionCheckboxOutline,
  ionMailOutline,
  ionCalendarNumberOutline,
  ionTextOutline,
  ionSquareOutline,
  ionAddOutline,
  ionRemoveOutline,
} from '@ng-icons/ionicons';
import {
  heroHashtag,
  heroH1,
  heroEllipsisHorizontal,
  heroViewColumns,
  heroDocumentText,
  heroMinus,
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-form-panel-item',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  providers: [  provideIcons({
    ionCallOutline,
    ionRadioButtonOnOutline,
    ionCheckboxOutline,
    ionMailOutline,
    ionCalendarNumberOutline,
    ionTextOutline,
    ionSquareOutline,
    ionAddOutline,
    ionRemoveOutline,
    heroDocumentText,
    heroEllipsisHorizontal,
    heroHashtag,
    heroH1,
    heroMinus,
    heroViewColumns,
  })],
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
