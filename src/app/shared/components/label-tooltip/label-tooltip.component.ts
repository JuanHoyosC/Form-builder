import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionInformationCircleOutline } from '@ng-icons/ionicons';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-label-tooltip',
  standalone: true,
  imports: [CommonModule, NgIconComponent, TooltipModule],
  providers: [
    provideIcons({
      ionInformationCircleOutline
    }),
  ],
  templateUrl: './label-tooltip.component.html',
  styleUrl: './label-tooltip.component.scss',
})
export class LabelTooltipComponent {
  @Input() label: string | undefined = undefined;
  @Input() tooltip: string | undefined = undefined;
  @Input() id: string | undefined = undefined;
  @Input() required: boolean | undefined = undefined;
  @Input() customClass: string | undefined = undefined;
}
