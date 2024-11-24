import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  model,
  Output,
  signal,
} from '@angular/core';
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
} from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LabelTooltipComponent } from '../label-tooltip/label-tooltip.component';
import { HERO_ICONS } from '../../icons';

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
  value = signal<Option[]>([]);
  fieldId: string = crypto.randomUUID();

  onTouched: () => void = () => {};
  onChangeFn: (value: Option[]) => void = () => {};

  // Métodos para ControlValueAccessor
  writeValue(value: Option[]): void {
    if (value) {
      this.value.set(value);
    }
  }

  registerOnChange(fn: (value: Option[]) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Métodos propios
  addNewOption() {
    this.value.update((value) => [...value, { label: '', value: '' }]);
    this.onChange();
  }

  removeOption(index: number) {
    this.value.update((value) =>
      value.filter((_, currentIndex: number) => currentIndex !== index)
    );
    this.onChange();
  }

  onChange() {
    this.onChangeFn(this.value());
  }
}

export interface Option {
  label: string;
  value: string | number;
}
