import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SettingService } from '../../services/setting.service';
import { LabelTooltipComponent } from '../../../../../../shared/components/label-tooltip/label-tooltip.component';


@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, InputTextareaModule, LabelTooltipComponent, PanelModule],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesComponent implements AfterViewInit{
  @ViewChild('description') textAreaElement!: ElementRef<HTMLTextAreaElement>;
  public readonly settingService = inject(SettingService);

  ngAfterViewInit(): void {
   setTimeout(() => {
    this.adjustTextareaHeight();
   }, 200)
  }

  adjustTextareaHeight(): void {
    const textarea = this.textAreaElement?.nativeElement;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
      textarea.style.maxHeight = '178px'
    }
  }
}
