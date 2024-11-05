import { Component } from '@angular/core';
import { FormPanelSearchComponent } from '../form-panel-search/form-panel-search.component';
import { TabViewModule } from 'primeng/tabview';
@Component({
  selector: 'app-form-panel-header',
  standalone: true,
  imports: [TabViewModule, FormPanelSearchComponent],
  templateUrl: './form-panel-header.component.html',
  styleUrl: './form-panel-header.component.css'
})
export class FormPanelHeaderComponent {

}
