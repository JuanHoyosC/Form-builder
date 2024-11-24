import {
  Component,
  inject,
  input,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { FormBuilderTypesService } from '../../../../services/form-builder.service';
import { ClickOutsideDirective } from '../../../../directives/click-outside.directive';
import { CustomFormlyFieldConfig, FieldGroup } from '../../../../types/form-builder.types';
import { DragIconComponent } from '../drag-icon/drag-icon.component';
import { FormFieldMenuComponent } from '../form-field-menu/form-field-menu.component';


@Component({
  selector: 'app-form-field-group-item',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective, DragIconComponent, FormlyModule, FormFieldMenuComponent],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './form-field-group-item.component.html',
  styleUrl: './form-field-group-item.component.scss',
})
export class FormFieldGroupItemComponent {
  field = input.required<CustomFormlyFieldConfig>();
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
