import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormBuilderTypesService } from '../../services/form-builder-types.service';
import { SortablejsModule } from 'nxt-sortablejs';
import { FormFieldGroupItemComponent } from '../form-field-group-item/form-field-group-item.component';
import { Options, SortableEvent } from 'sortablejs';
import { DropZoneDirective } from '../../directives/drag-and-drop.directive';


@Component({
  selector: 'app-form-field-group',
  standalone: true,
  imports: [CommonModule, DropZoneDirective,  FormlyModule, FormFieldGroupItemComponent, SortablejsModule],
  templateUrl: './form-field-group.component.html',
  styleUrl: './form-field-group.component.css',
})
export class FormFieldGroupComponent implements OnChanges{
  @Input() field!: FormlyFieldConfig;
  formBuilderTypesService = inject(FormBuilderTypesService);
  private cdr = inject(ChangeDetectorRef);

  ngOnChanges(changes: SimpleChanges): void {
    console.log('1')
  }

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
    handle: '.handle',
    onAdd: (event: SortableEvent) => {
      const fieldGroup = this.field.fieldGroup;
      this.formBuilderTypesService.saveNewField(fieldGroup, event.newIndex);
      console.log(this.field.fieldGroup, '1')
      this.cdr.detectChanges();
    },
    onEnd: () => {
      console.log(this.field.fieldGroup, '2')
      this.cdr.detectChanges();
    }
  };
}
