import { Component, OnInit, signal } from '@angular/core';
import { FormPanelItemComponent } from '../form-panel-item/form-panel-item.component';
import { CommonModule } from '@angular/common';
import { FormFieldList } from '../../../../types/form-builder.types';
import { SortablejsModule } from 'nxt-sortablejs';
import { PanelModule } from 'primeng/panel';
import { Options } from 'sortablejs';
import { SearchComponentPipe } from '../../../../pipes/search-component.pipe';
import { FormPanelSearchComponent } from '../form-panel-search/form-panel-search.component';
import { FlattenFieldsPipe } from '../../../../pipes/flatten-fields.pipe';
import { FORM_FIELD_LIST } from '../../../../config/form-fields.config';

@Component({
  selector: 'app-form-panel-section-list',
  standalone: true,
  imports: [
    CommonModule,
    FormPanelItemComponent,
    FormPanelSearchComponent,
    PanelModule,
    SortablejsModule,
    SearchComponentPipe,
    FlattenFieldsPipe
  ],
  templateUrl: './form-panel-section-list.component.html',
  styleUrl: './form-panel-section-list.component.scss',
})
export class FormPanelSectionListComponent implements OnInit {
  formFieldList = signal<FormFieldList[]>([]);
  search = signal<string>('');

  ngOnInit(): void {
    this.formFieldList.set(FORM_FIELD_LIST)
  }
  
  sortableConfig: Options = {
    group: {
      name: 'shared',
      pull: 'clone',
      put: false,
    },
    animation: 150,
    sort: false,
  };
}
