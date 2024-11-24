import {
  Component,
  inject,
  input,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { FormBuilderTypesService } from '../../../../services/form-builder.service';
import { ClickOutsideDirective } from '../../../../directives/click-outside.directive';
import { FieldGroup } from '../../../../types/form-builder.types';
import { MenuComponent, DragIconComponent } from '../index'

@Component({
  selector: 'app-form-field-group-item',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective, DragIconComponent, FormlyModule, MenuComponent],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './form-field-group-item.component.html',
  styleUrl: './form-field-group-item.component.scss',
})
export class FormFieldGroupItemComponent {
  field = input.required<FormlyFieldConfig>();
  fieldGroup = input.required<FieldGroup>();
  formBuilderTypesService = inject(FormBuilderTypesService);
  removeElement = false;
  closeMenuForSelectedField() {
    this.formBuilderTypesService.deactivateFieldMenu();
  }

  openMenuForSelectedField(event: MouseEvent) {
    event.stopPropagation();
    this.formBuilderTypesService.activateFieldMenu(this.field());
  }
}
