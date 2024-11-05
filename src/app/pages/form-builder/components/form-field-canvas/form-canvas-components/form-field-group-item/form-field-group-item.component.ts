import {
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroTrash } from '@ng-icons/heroicons/outline';
import { ionCopyOutline, ionSettingsOutline } from '@ng-icons/ionicons';
import { CommonModule } from '@angular/common';
import { FormBuilderTypesService } from '../../../../services/form-builder.service';
import { ClickOutsideDirective } from '../../../../directives/click-outside.directive';
import { FieldGroup } from '../../../../interfaces/form-builder';

@Component({
  selector: 'app-form-field-group-item',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective, FormlyModule, NgIconComponent],
  providers: [provideIcons({ heroTrash, ionCopyOutline, ionSettingsOutline })],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './form-field-group-item.component.html',
  styleUrl: './form-field-group-item.component.css',
})
export class FormFieldGroupItemComponent {
  @Input() field!: FormlyFieldConfig;
  @Input() fieldGroup: FieldGroup;
  formBuilderTypesService = inject(FormBuilderTypesService);
  private cdr = inject(ChangeDetectorRef);
  removeElement = false;

  openMenuForSelectedField(event: MouseEvent) {
    event.stopPropagation();
    this.formBuilderTypesService.activateFieldMenu(this.field);
  }

  closeMenuForSelectedField() {
    this.formBuilderTypesService.deactivateFieldMenu();
  }

  removeField(event: MouseEvent) {
    event.stopPropagation();
    this.removeElement = true;
    this.closeMenuForSelectedField();
    setTimeout(() => {
      this.formBuilderTypesService.removeField(this.field, this.fieldGroup);
      this.cdr.detectChanges();
    }, 500);
  }

  cloneField() {
    this.formBuilderTypesService.cloneField(this.field, this.fieldGroup);
  }
}
