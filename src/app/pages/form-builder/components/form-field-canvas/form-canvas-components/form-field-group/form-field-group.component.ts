import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormBuilderTypesService } from '../../../../services/form-builder.service';
import { SortablejsModule } from 'nxt-sortablejs';
import { FormFieldGroupItemComponent } from '../form-field-group-item/form-field-group-item.component';
import { Options, SortableEvent } from 'sortablejs';
import { DropZoneDirective } from '../../../../directives/drag-and-drop.directive';


@Component({
  selector: 'app-form-field-group',
  standalone: true,
  imports: [CommonModule, DropZoneDirective,  FormlyModule, FormFieldGroupItemComponent, SortablejsModule],
  templateUrl: './form-field-group.component.html',
  styleUrl: './form-field-group.component.css',
})
export class FormFieldGroupComponent {
  @Input() field!: FormlyFieldConfig;
  public readonly formBuilderTypesService = inject(FormBuilderTypesService);
  private cdr = inject(ChangeDetectorRef);
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
      this.cdr.detectChanges();
    },
    onEnd: () => {
      this.cdr.detectChanges();
    }
  };

   openMenuForSelectedField(event: MouseEvent) {
    event.stopPropagation();
    this.formBuilderTypesService.activateFieldMenu(this.field);
  }

  closeMenuForSelectedField() {
    this.formBuilderTypesService.deactivateFieldMenu();
  }
}
