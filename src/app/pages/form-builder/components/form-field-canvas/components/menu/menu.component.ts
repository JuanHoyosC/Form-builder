import { ChangeDetectorRef, Component, inject, input, signal } from '@angular/core';
import { FieldGroup } from '../../../../types/form-builder.types';
import { FormBuilderTypesService } from '../../../../services/form-builder.service';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { HERO_ICONS } from '../../../../../../shared/icons';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons(HERO_ICONS)],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  field = input.required<FormlyFieldConfig>();
  fieldGroup = input.required<FieldGroup>();
  removeElement = signal<boolean>(false)
  public readonly formBuilderTypesService = inject(FormBuilderTypesService);
  private cdr = inject(ChangeDetectorRef);
  
  removeField(event: MouseEvent) {
    event.stopPropagation();
    this.removeElement.set(true);
    this.closeMenuForSelectedField();
    setTimeout(() => {
      this.formBuilderTypesService.removeField(this.field(), this.fieldGroup());
      this.cdr.detectChanges();
    }, 500);
  }

  cloneField() {
    this.formBuilderTypesService.cloneField(this.field(), this.fieldGroup());
  }

  closeMenuForSelectedField() {
    this.formBuilderTypesService.deactivateFieldMenu();
  }
}
