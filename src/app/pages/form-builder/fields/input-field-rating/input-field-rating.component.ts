import { Component, NO_ERRORS_SCHEMA, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { RatingModule } from 'primeng/rating';
import { InputRatingNumberComponent } from '../../../../shared/components/input-rating-number/input-rating-number.component';

@Component({
  selector: 'app-input-field-rating',
  standalone: true,
  imports: [InputRatingNumberComponent, RatingModule, ReactiveFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './input-field-rating.component.html',
})
export class InputFieldRatingComponent
  extends FieldType<FieldTypeConfig>
  implements OnInit
{
  previousValue = signal<number | null>(null);
  stars = signal<number>(2);

  ngOnInit(): void {
    if (this.props['stars'] < 2) {
      return this.stars.set(2);
    }
    if (this.props['stars'] > 10) {
      return this.stars.set(10);
    }
    this.stars.set(this.props['stars']);
  }

  setRating(value: number) {
    const newValue = this.previousValue() !== value ? value : null;
    this.formControl.setValue(newValue);
    this.previousValue.set(newValue);
  }
}
