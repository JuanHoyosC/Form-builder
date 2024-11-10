import { Component, Input, OnChanges } from '@angular/core';
import { FormlyFieldProps } from '@ngx-formly/core';
import {
  CustomFormlyFieldProps,
  TextStyleKeys,
  LayoutOption,
} from '../../../../../interfaces/form-builder';
import { CommonModule } from '@angular/common';
import { provideIcons } from '@ng-icons/core';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { LabelTooltipComponent } from '../../../../../../../shared/components/label-tooltip/label-tooltip.component';
import {
  DisabledOptions,
  SelectButtonComponent,
} from '../../../../../../../shared/components/select-button/select-button.component';
import { HERO_ICONS } from '../../../../../../../shared/components/icons';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PanelModule,
    SelectButtonComponent,
    LabelTooltipComponent,
  ],
  providers: [
    provideIcons(HERO_ICONS),
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnChanges {
  @Input() props!: FormlyFieldProps & CustomFormlyFieldProps;
  // Text alignment options with icons and alignment values
  textAlignmentOptions: LayoutOption[] = [
    { icon: 'heroBars3BottomLeft', value: 'left', disabled: false },
    { icon: 'heroBars3', value: 'center', disabled: false },
    { icon: 'heroBars4', value: 'justify', disabled: false },
    { icon: 'heroBars3BottomRight', value: 'right', disabled: false },
  ];

  // Header level options (h1, h2, h3)
  headingLevelOptions: LayoutOption[] = [
    { icon: 'heroH1', value: 'h1', disabled: false },
    { icon: 'heroH2', value: 'h2', disabled: false },
    { icon: 'heroH3', value: 'h3', disabled: false },
  ];

  severityOptions: LayoutOption[] = [
    {
      icon: 'ionInformationCircleOutline',
      value: 'info',
      color: '#3b82f6',
      disabled: false,
    },
    {
      icon: 'ionWarningOutline',
      value: 'warn',
      color: '#cc8925',
      disabled: false,
    },
    { icon: 'ionCloseCircleOutline', value: 'error', color: '#ff5757', disabled: false },
    {
      icon: 'ionCheckmarkCircleOutline',
      value: 'success',
      color: '#1ea97c',
      disabled: false,
    },
  ];

  // Text formatting options (bold, underline, italic, strikethrough)
  textFormattingOptions: LayoutOption[] = [
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
  appliedTextStyles: TextStyleKeys[] = [];

  disabledOptions: DisabledOptions[] = [
    { disabled: 'underline', enabled: 'strikethrough' },
    { disabled: 'strikethrough', enabled: 'underline' },
  ];

  /**
   * Initializes options when input properties change.
   * This method is triggered when `props` or other input properties update.
   */
  ngOnChanges(): void {
    this.initializeAppliedTextStyles();
  }

  /**
   * Updates the list of applied text styles (`appliedTextStyles`) based on the current `props`.
   * Each style (bold, italic, etc.) is added if it is active in `props`.
   */
  initializeAppliedTextStyles(): void {
    this.appliedTextStyles = [];
    for (const key of this.textStyleKeys) {
      if (this.props[key]) {
        this.appliedTextStyles.push(key);
      }
    }
  }

  enabledTextStyles(): void { 
    for (const key of this.textStyleKeys) {
     this.props[key] = this.appliedTextStyles.includes(key);
    }
  }
}
