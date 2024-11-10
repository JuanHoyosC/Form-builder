import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LabelTooltipComponent } from '../label-tooltip/label-tooltip.component';
import { HERO_ICONS } from '../icons';

@Component({
  selector: 'app-input-options',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    NgIconComponent,
    LabelTooltipComponent,
  ],
  providers: [
    provideIcons(HERO_ICONS),
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputOptionsComponent),
      multi: true,
    },
  ],
  templateUrl: './input-options.component.html',
  styleUrls: ['./input-options.component.scss'],
})
export class InputOptionsComponent implements ControlValueAccessor {
  @Input() options: Option[] = [{ label: '', value: '' }];
  @Output() optionsChange = new EventEmitter<Option[]>();
  fieldId: string = crypto.randomUUID();

  private onTouched: () => void = () => {};
  private onChangeFn: (value: any) => void = () => {};

  // Métodos para ControlValueAccessor
  writeValue(value: Option[]): void {
    if (value) {
      this.options = value;
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Métodos propios
  addNewOption() {
    this.options.push({ label: '', value: '' });
    this.onChange();
  }

  removeOption(index: number) {
    this.options.splice(index, 1);
    this.onChange();
  }

  onChange() {
    this.onChangeFn(this.options);
    this.optionsChange.emit(this.options);
  }
}

export type Option = {
  label: string;
  value: string | number;
};
