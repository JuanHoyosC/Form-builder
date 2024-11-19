import {
  Component,
  EventEmitter,
  forwardRef,
  input,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';
import {
  SelectButtonChangeEvent,
  SelectButtonModule,
} from 'primeng/selectbutton';

@Component({
  selector: 'app-select-button',
  standalone: true,
  imports: [FormsModule, NgIconComponent, SelectButtonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectButtonComponent),
      multi: true,
    },
  ],
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.scss',
})
export class SelectButtonComponent<T> implements OnInit {
  @Input() value: T | undefined = undefined;
  @Input() options: SelectableOption<T>[] = [];
  @Input() multiple: boolean = false;
  @Input() disabledOptions: DisabledOption<T>[] = [];
  @Input() name: string = 'select-button';
  @Input() id: string = 'select-button';
  @Output() valueChange: EventEmitter<T> = new EventEmitter();
  private onChangeFn: (value: T | undefined) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit(): void {
    this.setDefaultOption();
  }

  private writeValue(value: T): void {
    if (value) {
      this.value = value;
    }
  }

  private registerOnChange(fn: (value: unknown) => void): void {
    this.onChangeFn = fn;
  }
  private registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private onChange(): void {
    this.onChangeFn(this.value);
    this.valueChange.emit(this.value);
  }

  private setDefaultOption(): void {
    if (this.value !== undefined) {
      this.applyDefaultToggleState({ value: this.value }, this.options);
    }
  }

  onSelectButtonChange(
    event: SelectButtonChangeEvent,
    options: SelectableOption<T>[]
  ): void {
    if (this.multiple) {
      this.updateTextFormattingState(event);
    } else {
      this.applyDefaultToggleState(event, options);
    }
  }

  private applyDefaultToggleState(
    event: SelectButtonChangeEvent,
    options: SelectableOption<T>[]
  ): void {
    if (!event.value) return;
    for (const option of options) {
      option.disabled = option.value === event.value;
    }
    this.onChange();
  }

  /**
   * Updates the text formatting state based on the selected button change event.
   * It disables formatting options based on specific conditions.
   *
   * @param event The event triggered by the select button change.
   */
  private updateTextFormattingState(event: SelectButtonChangeEvent): void {
    this.enableAllOptions();
    for (let disabledOption of this.disabledOptions) {
      if (this.isEnabledStyleSelected(event, disabledOption.enabled)) {
        const optionToDisable = this.getOptionToDisable(
          disabledOption.disabled
        );
        if (optionToDisable) {
          this.disableOption(optionToDisable);
        }
      }
    }
    this.onChange();
  }

  /**
   * Enables all options by setting their `disabled` property to false.
   */
  private enableAllOptions(): void {
    this.options = this.options.map((option) => ({
      ...option,
      disabled: false,
    }));
  }

  /**
   * Checks if a specific enabled style is selected.
   *
   * @param event The event triggered by the select button change.
   * @param enabledStyle The enabled style to check for in the event value.
   * @returns A boolean indicating if the enabled style is selected.
   */
  private isEnabledStyleSelected(
    event: SelectButtonChangeEvent,
    enabledStyle: T
  ): boolean {
    return event.value === enabledStyle;
  }

  /**
   * Finds the option object corresponding to the style that should be disabled.
   *
   * @param disabledStyle The style that needs to be disabled.
   * @returns The option object that should be disabled, or undefined if not found.
   */
  private getOptionToDisable(disabledStyle: T): SelectableOption<T> | undefined {
    return this.options.find((option) => option.value === disabledStyle);
  }

  /**
   * Disables a given option.
   *
   * @param option The option object to be disabled.
   */
  private disableOption(option: SelectableOption<T>): void {
    option.disabled = true;
  }
}

export type SelectableOption<T> = {
  icon: string;
  value: T;
  disabled?: boolean;
  color?: Color;
};

export type Color = `#${string}` | `rgb(${number},${number},${number})` | `rgba(${number},${number},${number},${number})`;

export type DisabledOption<T> = {
  enabled: T;
  disabled: T;
};

