import { Component, inject, OnInit } from '@angular/core';
import { FormPanelItemComponent } from '../form-panel-item/form-panel-item.component';
import { CommonModule } from '@angular/common';
import { FormFieldList } from '../../../../interfaces/form-builder';
import { SortablejsModule } from 'nxt-sortablejs';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { PanelModule } from 'primeng/panel';
import { FormBuilderTypesService } from '../../../../services/form-builder.service';
import { Options } from 'sortablejs';
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
import { SearchComponentPipe } from '../../../../pipes/search-component.pipe';
import { FormPanelSearchComponent } from '../form-panel-search/form-panel-search.component';
import { FlattenFieldsPipe } from '../../../../pipes/flatten-fields.pipe';

@Component({
  selector: 'app-form-panel-section-list',
  standalone: true,
  imports: [
    CommonModule,
    FormPanelItemComponent,
    FormPanelSearchComponent,
    NgIconComponent,
    PanelModule,
    SortablejsModule,
    SearchComponentPipe,
    FlattenFieldsPipe
  ],
  providers: [
    provideIcons({
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
    }),
  ],
  templateUrl: './form-panel-section-list.component.html',
  styleUrl: './form-panel-section-list.component.scss',
})
export class FormPanelSectionListComponent implements OnInit {
  private readonly formBuilderTypesService = inject(FormBuilderTypesService);
  formFieldList: FormFieldList[] = [];
  searchComponent: string = '';

  ngOnInit(): void {
    this.formFieldList = this.formBuilderTypesService.formFieldList;
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
