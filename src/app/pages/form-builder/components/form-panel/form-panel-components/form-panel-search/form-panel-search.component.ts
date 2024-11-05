import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlass } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-form-panel-search',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ heroMagnifyingGlass })],
  templateUrl: './form-panel-search.component.html',
  styleUrl: './form-panel-search.component.css'
})
export class FormPanelSearchComponent {

}
