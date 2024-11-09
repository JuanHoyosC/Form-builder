import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';
import { FieldDescriptionComponent } from '../../../../shared/components/field-description/field-description.component';
import { LabelTooltipComponent } from '../../../../shared/components/label-tooltip/label-tooltip.component';

@Component({
  selector: 'app-fieldWrapper',
  standalone: true,
  imports: [CommonModule, FieldDescriptionComponent, LabelTooltipComponent],
  templateUrl: './fieldWrapper.component.html',
})
export class FieldWrapperComponent extends FieldWrapper {}
