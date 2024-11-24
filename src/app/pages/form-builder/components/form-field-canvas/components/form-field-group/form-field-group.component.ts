import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, input, Input } from '@angular/core';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormBuilderTypesService } from '../../../../services/form-builder.service';
import { SortablejsModule } from 'nxt-sortablejs';
import { Options, SortableEvent } from 'sortablejs';
import { DropZoneDirective } from '../../../../directives/drag-and-drop.directive';
import { MenuComponent } from '../menu/menu.component';
import { FieldGroup } from '../../../../types/form-builder.types';
import { DragIconComponent } from '../drag-icon/drag-icon.component';
import { FormFieldGroupItemComponent } from '../index'

@Component({
  selector: 'app-form-field-group',
  standalone: true,
  imports: [CommonModule, DragIconComponent, DropZoneDirective,  FormlyModule, FormFieldGroupItemComponent, MenuComponent, SortablejsModule],
  templateUrl: './form-field-group.component.html',
  styleUrl: './form-field-group.component.scss',
})
export class FormFieldGroupComponent {
  field = input.required<FormlyFieldConfig>();
  fieldGroup = input.required<FieldGroup>();
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
      const fieldGroup = this.field().fieldGroup;
      this.formBuilderTypesService.saveNewField(fieldGroup, event.newIndex);
      this.cdr.detectChanges();
    },

    onEnd: () => {
      this.cdr.detectChanges();
    }
  };

   openMenuForSelectedField(event: MouseEvent) {
    event.stopPropagation();
    this.formBuilderTypesService.activateFieldMenu(this.field());
  }

  closeMenuForSelectedField() {
    this.formBuilderTypesService.deactivateFieldMenu();
  }
}
