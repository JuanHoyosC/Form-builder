import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { HERO_ICONS } from '../../../../../../shared/icons';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: provideIcons(HERO_ICONS),
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  @Input() showFormPanelList = true;
  @Input() activeTabIndex = 0;
  @Output() showFormPanelListChange: EventEmitter<boolean> = new EventEmitter();
  @Output() activeTabIndexChange: EventEmitter<number> = new EventEmitter();
  menu: Menu[] = [
    {
      icon: 'heroChevronLeft',
      activeTabIndex: undefined,
      handle: () => this.toggleFormPanel(),
    },
    {
      icon: 'ionHammerOutline',
      activeTabIndex: 0,
      handle: () => this.handleMenuClick(0),
    },
    {
      icon: 'heroQueueList',
      activeTabIndex: 1,
      handle: () => this.handleMenuClick(1),
    },
  ];
  
  toggleFormPanel() {
    this.showFormPanelList = !this.showFormPanelList;
    this.showFormPanelListChange.emit(this.showFormPanelList);
    this.setMenuArrowIcon();
  }
  
  handleMenuClick(tabIndex: number) {
    this.activeTabIndex = tabIndex;
    this.showFormPanelList = true;
    this.showFormPanelListChange.emit(this.showFormPanelList);
    this.activeTabIndexChange.emit(tabIndex);
    this.setMenuArrowIcon();
  }
  
  setMenuArrowIcon() {
    this.menu[0].icon = this.showFormPanelList ? 'heroChevronLeft' : 'heroChevronRight';
  }
}

interface Menu {
  icon: string;
  activeTabIndex: number | undefined;
  handle: () => void;
}
