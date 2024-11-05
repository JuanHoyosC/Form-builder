import { Component, inject, Input, OnChanges } from '@angular/core';
import { FormPanelItemComponent } from '../form-panel-item/form-panel-item.component';
import { CommonModule } from '@angular/common';
import { FormFieldList } from '../../../../interfaces/form-builder';
import { SortablejsModule } from 'nxt-sortablejs';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { PanelModule } from 'primeng/panel';
import { FormBuilderTypesService } from '../../../../services/form-builder.service';
import { Options } from 'sortablejs';

@Component({
  selector: 'app-form-panel-section-list',
  standalone: true,
  imports: [CommonModule, FormPanelItemComponent, PanelModule, SortablejsModule],
  templateUrl: './form-panel-section-list.component.html',
  styleUrl: './form-panel-section-list.component.scss',
})
export class FormPanelSectionListComponent implements OnChanges {
  @Input() formPanelList: FormFieldList = { title: '', items: [] };
  formPanelFieldList: FormlyFieldConfig[] = [];
  formBuilderTypesService = inject(FormBuilderTypesService);

  ngOnChanges(): void {
    this.formPanelFieldList = this.formPanelList.items.flatMap(
      (item) => item.field
    );
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
