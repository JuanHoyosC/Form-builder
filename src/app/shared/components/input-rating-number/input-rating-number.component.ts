import { Component, forwardRef, input, OnInit, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-rating-number',
  standalone: true,
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRatingNumberComponent),
      multi: true,
    },
  ],
  templateUrl: './input-rating-number.component.html',
  styleUrl: './input-rating-number.component.css',
})
export class InputRatingNumberComponent
  implements ControlValueAccessor, OnInit
{
  stars = input.required<number>();
  onTouched: () => void = () => {
    /**/
  };
  onChangeFn: (value: number | null) => void = () => {
    /**/
  };
  value = signal<number | null>(null);
  maxRatingLevels = signal<number[]>([]);
  previousValue = signal<number | null>(null);
  ngOnInit(): void {
    this.maxRatingLevels.set(new Array(this.stars()).fill(0));
  }
  writeValue(value: number | null): void {
    if (value) {
      this.value.set(value);
    }
  }

  registerOnChange(fn: (value: number | null) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setRating(value: number) {
    const newValue = this.previousValue() !== value ? value : null;
    this.writeValue(newValue);
    this.onChangeFn(newValue);
    this.onTouched();
    this.previousValue.set(newValue);
  }
}
