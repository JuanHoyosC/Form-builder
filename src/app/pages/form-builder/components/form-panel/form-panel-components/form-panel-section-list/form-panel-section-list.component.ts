import { Component, inject, OnInit } from '@angular/core';
import { FormPanelItemComponent } from '../form-panel-item/form-panel-item.component';
import { CommonModule } from '@angular/common';
import { FormFieldList } from '../../../../interfaces/form-builder';
import { SortablejsModule } from 'nxt-sortablejs';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { PanelModule } from 'primeng/panel';
import { Options } from 'sortablejs';
import { SearchComponentPipe } from '../../../../pipes/search-component.pipe';
import { FormPanelSearchComponent } from '../form-panel-search/form-panel-search.component';
import { FlattenFieldsPipe } from '../../../../pipes/flatten-fields.pipe';
import { FORM_FIELD_LIST } from '../../../../services/form-fields.config';

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
  formFieldList: FormFieldList[] = [];
  searchComponent: string = '';

  ngOnInit(): void {
    this.formFieldList = FORM_FIELD_LIST;
  }
  
  sortableConfig: Options = {
    group: {
      name: 'shared',
      pull: 'clone',
      put: false, // Do not allow items to be put into this list
    },
    animation: 150,
    sort: false,
  };
}
