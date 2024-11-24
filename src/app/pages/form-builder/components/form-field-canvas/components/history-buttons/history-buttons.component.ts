import { Component, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { HistoryService } from '../../../../services/history.service';
import { HERO_ICONS } from '../../../../../../shared/icons';

@Component({
  selector: 'app-history-buttons',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons(HERO_ICONS)],
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
