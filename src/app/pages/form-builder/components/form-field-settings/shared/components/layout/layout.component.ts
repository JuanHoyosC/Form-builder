import { Component, Input, OnChanges } from '@angular/core';
import { FormlyFieldProps } from '@ngx-formly/core';
import {
  CustomFormlyFieldProps,
  TextStyleKeys,
} from '../../../../../interfaces/form-builder';
import { CommonModule } from '@angular/common';
import {
  SelectButtonChangeEvent,
  SelectButtonModule,
} from 'primeng/selectbutton';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroBars3,
  heroBars3BottomLeft,
  heroBars3BottomRight,
  heroBars4,
  heroBold,
  heroH1,
  heroH2,
  heroH3,
  heroItalic,
  heroStrikethrough,
  heroUnderline,
} from '@ng-icons/heroicons/outline';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { LabelTooltipComponent } from '../../../../../../../shared/components/label-tooltip/label-tooltip.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIconComponent,
    PanelModule,
    SelectButtonModule,
    LabelTooltipComponent,
  ],
  providers: [
    provideIcons({
      heroBars3BottomLeft,
      heroBars3BottomRight,
      heroBars4,
      heroBars3,
      heroUnderline,
      heroItalic,
      heroBold,
      heroH1,
      heroH2,
      heroH3,
      heroStrikethrough,
    }),
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnChanges {
  @Input() props!: FormlyFieldProps & CustomFormlyFieldProps;
  // Text alignment options with icons and alignment values
  textAlignmentOptions: Option[] = [
    { icon: 'heroBars3BottomLeft', value: 'left', disabled: false },
    { icon: 'heroBars3', value: 'center', disabled: false },
    { icon: 'heroBars4', value: 'justify', disabled: false },
    { icon: 'heroBars3BottomRight', value: 'right', disabled: false },
  ];

  // Header level options (h1, h2, h3)
  headingLevelOptions: Option[] = [
    { icon: 'heroH1', value: 'h1', disabled: false },
    { icon: 'heroH2', value: 'h2', disabled: false },
    { icon: 'heroH3', value: 'h3', disabled: false },
  ];

  // Text formatting options (bold, underline, italic, strikethrough)
  textFormattingOptions: Option[] = [
    { icon: 'heroBold', value: 'bold', disabled: false },
    { icon: 'heroUnderline', value: 'underline', disabled: false },
    { icon: 'heroItalic', value: 'italic', disabled: false },
    { icon: 'heroStrikethrough', value: 'strikethrough', disabled: false },
  ];

  // Keys of text style properties represented as strings
  textStyleKeys: TextStyleKeys[] = [
    'bold',
    'italic',
    'strikethrough',
    'underline',
  ];

  // List of currently applied text styles
  appliedTextStyles: string[] = [];

  /**
   * Initializes options when input properties change.
   * This method is triggered when `props` or other input properties update.
   */
  ngOnChanges(): void {
    this.setDefaultHeadingOption();
    this.setDefaultTextAlignmentOption();
    this.updateAppliedTextStyles();
  }

  /**
   * Sets the default header type option based on `headingType` in `props`.
   * Ensures that a heading option is selected when the component loads.
   */
  setDefaultHeadingOption(): void {
    this.applyDefaultToggleState(
      { value: this.props.headingType },
      this.headingLevelOptions
    );
  }

  /**
   * Sets the default text alignment option based on `align` in `props`.
   * Ensures a text alignment option is selected when the component loads.
   */
  setDefaultTextAlignmentOption(): void {
    this.applyDefaultToggleState(
      { value: this.props.align },
      this.textAlignmentOptions
    );
  }

  /**
   * Updates the list of applied text styles (`appliedTextStyles`) based on the current `props`.
   * Each style (bold, italic, etc.) is added if it is active in `props`.
   */
  updateAppliedTextStyles(): void {
    this.appliedTextStyles = [];
    for (const key of this.textStyleKeys) {
      if (this.props[key]) {
        this.appliedTextStyles.push(key);
      }
    }
  }

  applyDefaultToggleState(
    event: SelectButtonChangeEvent,
    options: Option[]
  ): void {
    if (!event.value) return;
    for (const option of options) {
      option.disabled = option.value === event.value;
    }
  }
  /**
   * Updates the disabled state of specific text formatting options based on the selected styles.
   * Disables "underline" if "strikethrough" is selected, and vice versa, to prevent conflicting styles.
   *
   * @param event - The event containing the current selection of text formatting options.
   */
  updateTextFormattingState(event: SelectButtonChangeEvent): void {
    if (!this.props) return;
    this.textFormattingOptions[3].disabled = event.value.includes('underline');
    this.textFormattingOptions[1].disabled =
      event.value.includes('strikethrough');
  }
}

interface Option {
  icon: string;
  value: string;
  disabled?: boolean;
}
