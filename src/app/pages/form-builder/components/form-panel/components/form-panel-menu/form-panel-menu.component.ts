import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { HERO_ICONS } from '../../../../../../shared/icons';

@Component({
  selector: 'app-form-panel-menu',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: provideIcons(HERO_ICONS),
  templateUrl: './form-panel-menu.component.html',
  styleUrl: './form-panel-menu.component.css',
})
export class FormPanelMenuComponent {
  showFormPanelList = model<boolean>(true);
  activeTabIndex = model<number>(0);
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
    this.showFormPanelList.update((value) => !value);
    this.setMenuArrowIcon();
  }
  
  handleMenuClick(tabIndex: number) {
    this.activeTabIndex.set(tabIndex);
    this.showFormPanelList.set(true);
    this.setMenuArrowIcon();
  }
  
  setMenuArrowIcon() {
    this.menu[0].icon = this.showFormPanelList() ? 'heroChevronLeft' : 'heroChevronRight';
  }
}

interface Menu {
  icon: string;
  activeTabIndex: number | undefined;
  handle: () => void;
}
