import { Component, inject } from '@angular/core';
import {
  Align,
  HeadingType,
  Severity,
  TextFormattingOption,
} from '../../../../../interfaces/form-builder';
import { CommonModule } from '@angular/common';
import { provideIcons } from '@ng-icons/core';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { LabelTooltipComponent } from '../../../../../../../shared/components/label-tooltip/label-tooltip.component';
import {
  DisabledOption,
  SelectableOption,
  SelectButtonComponent,
} from '../../../../../../../shared/components/select-button/select-button.component';
import { HERO_ICONS } from '../../../../../../../shared/icons';
import { SettingService } from '../../../setting.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    PanelModule,
    SelectButtonComponent,
    LabelTooltipComponent,
    ReactiveFormsModule
  ],
  providers: [
    provideIcons(HERO_ICONS),
  ],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective}],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  public settingService = inject(SettingService);
  // Text alignment options with icons and alignment values
  textAlignmentOptions: SelectableOption<Align>[] = [
    { icon: 'heroBars3BottomLeft', value: 'left', disabled: false },
    { icon: 'heroBars3', value: 'center', disabled: false },
    { icon: 'heroBars4', value: 'justify', disabled: false },
    { icon: 'heroBars3BottomRight', value: 'right', disabled: false },
  ];

  colsOptions: SelectableOption<number>[] = [
    { icon: 'ionSquareOutline', value: 1, disabled: false },
    { icon: 'heroSquares2x2', value: 2, disabled: false },
    { icon: 'heroViewColumns', value: 3, disabled: false },
  ];

  // Header level options (h1, h2, h3)
  headingLevelOptions: SelectableOption<HeadingType>[] = [
    { icon: 'heroH1', value: 'h1', disabled: false },
    { icon: 'heroH2', value: 'h2', disabled: false },
    { icon: 'heroH3', value: 'h3', disabled: false },
  ];

  severityOptions: SelectableOption<Severity>[] = [
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
  textFormattingOptions: SelectableOption<TextFormattingOption>[] = [
    { icon: 'heroBold', value: 'bold', disabled: false },
    { icon: 'heroUnderline', value: 'underline', disabled: false },
    { icon: 'heroItalic', value: 'italic', disabled: false },
    { icon: 'heroStrikethrough', value: 'strikethrough', disabled: false },
  ];

  disabledOptions: DisabledOption<TextFormattingOption>[] = [
    { disabled: 'underline', enabled: 'strikethrough' },
    { disabled: 'strikethrough', enabled: 'underline' },
  ];
}
