import { Component, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowUturnLeft, heroArrowUturnRight } from '@ng-icons/heroicons/outline';
import { HistoryService } from '../../../../services/history.service';

@Component({
  selector: 'app-history-buttons',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({heroArrowUturnLeft, heroArrowUturnRight})],
  templateUrl: './history-buttons.component.html',
  styleUrl: './history-buttons.component.css'
})
export class HistoryButtonsComponent {
  public readonly historyService = inject(HistoryService);

  undo() {
    this.historyService.undo();
  }

  redo() {
    this.historyService.redo();
  }

}
