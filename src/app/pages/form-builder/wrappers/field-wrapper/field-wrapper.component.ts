import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { FieldDescriptionComponent } from '../../../../shared/components/field-description/field-description.component';
import { LabelTooltipComponent } from '../../../../shared/components/label-tooltip/label-tooltip.component';

@Component({
  selector: 'app-field-wrapper',
  standalone: true,
  imports: [CommonModule, FieldDescriptionComponent, LabelTooltipComponent],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './field-wrapper.component.html',
})
export class FieldWrapperComponent extends FieldWrapper {}
