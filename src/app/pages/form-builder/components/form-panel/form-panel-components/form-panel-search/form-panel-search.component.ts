import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMagnifyingGlass } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-form-panel-search',
  standalone: true,
  imports: [CommonModule,  FormsModule, NgIconComponent],
  providers: [provideIcons({ heroMagnifyingGlass })],
  templateUrl: './form-panel-search.component.html',
  styleUrl: './form-panel-search.component.css'
})
export class FormPanelSearchComponent {
  @Input() searchComponent: string = '';
  @Output() searchComponentChange: EventEmitter<string> = new EventEmitter();
}
