import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { TooltipModule } from 'primeng/tooltip';
import { HERO_ICONS } from '../../icons';


@Component({
  selector: 'app-label-tooltip',
  standalone: true,
  imports: [CommonModule, NgIconComponent, TooltipModule],
  providers: [
    provideIcons(HERO_ICONS),
  ],
  templateUrl: './label-tooltip.component.html',
  styleUrl: './label-tooltip.component.scss',
})
export class LabelTooltipComponent {
  appId = input.required<string>();
  customClass = input<string | undefined>();
  label = input<string | undefined>(undefined);
  required = input<boolean | undefined>();
  tooltip = input<string | undefined>(undefined);
}
