import { Component, inject, effect } from '@angular/core';
import { FormBuilderTypesService } from '../../services/form-builder.service';
import { FormFieldGroupComponent } from './form-canvas-components/form-field-group/form-field-group.component';
import { CommonModule } from '@angular/common';
import { SortablejsModule } from 'nxt-sortablejs';
import { FormFieldGroupItemComponent } from './form-canvas-components/form-field-group-item/form-field-group-item.component';
import { FormlyModule } from '@ngx-formly/core';
import { Options, SortableEvent } from 'sortablejs';
import { ChangeDetectorRef } from '@angular/core';
import { DropZoneDirective } from '../../directives/drag-and-drop.directive';
import { FormsModule } from '@angular/forms';
import { HistoryService } from '../../services/history.service';
@Component({
  selector: 'app-form-field-canvas',
  standalone: true,
  imports: [
    CommonModule,
    FormFieldGroupComponent,
    FormFieldGroupItemComponent,
    FormlyModule,
    SortablejsModule,
    DropZoneDirective,
    FormsModule,
  ],
  templateUrl: './form-field-canvas.component.html',
  styleUrl: './form-field-canvas.component.css',
})
export class FormFieldCanvasComponent {
  private historyService = inject(HistoryService);
  private cdr = inject(ChangeDetectorRef);
  formBuilderTypesService = inject(FormBuilderTypesService);
  sortableConfig: Options = {
    group: {
      name: 'shared',
      put: true,
    },
    animation: 150,
    sort: true,
    fallbackOnBody: true,
    invertSwap: true,
    swapThreshold: 0.65,
    swap: true,
    filter: '.dropZone',
    handle: '.handle',
    onEnd: () => {
      this.cdr.detectChanges();
    },
    onAdd: (event: SortableEvent) => {
      const fieldGroup = this.formBuilderTypesService.fields().fieldGroup;
      this.formBuilderTypesService.saveNewField(fieldGroup, event.newIndex);
      this.cdr.detectChanges();
    },
  };

  constructor() {
    effect(
      () => this.historyService.addState(this.formBuilderTypesService.fields()),
      { allowSignalWrites: true }
    );
  }
}
