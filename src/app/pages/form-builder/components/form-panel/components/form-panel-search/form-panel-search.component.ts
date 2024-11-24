import { CommonModule } from '@angular/common';
import { Component, model} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { HERO_ICONS } from '../../../../../../shared/icons';

@Component({
  selector: 'app-form-panel-search',
  standalone: true,
  imports: [CommonModule,  FormsModule, NgIconComponent],
  providers: [provideIcons(HERO_ICONS)],
  templateUrl: './form-panel-search.component.html',
  styleUrl: './form-panel-search.component.css'
})
export class FormPanelSearchComponent {
  search = model.required<string>();
}
