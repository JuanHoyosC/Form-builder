import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  ionCallOutline,
  ionRadioButtonOnOutline,
  ionCheckboxOutline,
  ionMailOutline,
  ionCalendarNumberOutline,
  ionTextOutline,
  ionSquareOutline,
  ionAddOutline,
  ionRemoveOutline,
} from '@ng-icons/ionicons';
import {
  heroHashtag,
  heroH1,
  heroEllipsisHorizontal,
  heroChevronLeft,
  heroChevronRight,
  heroRectangleGroup,
  heroQueueList,
  heroViewColumns,
  heroDocumentText,
  heroMinus,
} from '@ng-icons/heroicons/outline';
import { FormPanelSectionListComponent } from './form-panel-components/form-panel-section-list/form-panel-section-list.component';
import { FormPanelHeaderComponent } from './form-panel-components/form-panel-header/form-panel-header.component';
import { TabViewModule } from 'primeng/tabview';
import { TreeDragDropService, TreeNode } from 'primeng/api';
import { FormBuilderTypesService } from '../../services/form-builder.service';

@Component({
  selector: 'app-form-panel',
  standalone: true,
  imports: [
    CommonModule,
    NgIconComponent,
    TabViewModule,
    FormPanelHeaderComponent,
    FormPanelSectionListComponent,
  ],
  providers: [
    provideIcons({
      ionCallOutline,
      ionRadioButtonOnOutline,
      ionCheckboxOutline,
      ionMailOutline,
      ionCalendarNumberOutline,
      ionTextOutline,
      ionSquareOutline,
      ionAddOutline,
      ionRemoveOutline,
      heroDocumentText,
      heroEllipsisHorizontal,
      heroHashtag,
      heroH1,
      heroChevronLeft,
      heroChevronRight,
      heroMinus,
      heroRectangleGroup,
      heroQueueList,
      heroViewColumns
    }),
    TreeDragDropService,
    FormBuilderTypesService,
  ],
  templateUrl: './form-panel.component.html',
  styleUrl: './form-panel.component.scss',
})
export class FormPanelComponent {
  formBuilderTypesService = inject(FormBuilderTypesService);
  files: TreeNode[] = [
    {
      key: '0',
      expanded: true,
      label: 'Container',
      data: 'Documents Folder',
      draggable: true,
      droppable: true,
      children: [
        {
          key: '0-0',
          label: 'Work',
          data: 'Work Folder',
          icon: 'pi pi-fw pi-cog',
          draggable: true,
          droppable: true,
          children: [
            {
              key: '0-0-0',
              label: 'Expenses.doc',
              icon: 'pi pi-fw pi-file',
              data: 'Expenses Document',
              draggable: true,
              droppable: true,
            },
            {
              key: '0-0-1',
              label: 'Resume.doc',
              icon: 'pi pi-fw pi-file',
              data: 'Resume Document',
              draggable: true,
              droppable: true,
            },
          ],
        },
      ],
    },
  ];

  menu: Menu[] = [
    {
      icon: 'heroChevronLeft',
      activeTabIndex: undefined,
      handle: () => {
        this.showFormPanelList = !this.showFormPanelList;
        this.setMenuArrowIcon();
      },
    },
    {
      icon: 'heroRectangleGroup',
      activeTabIndex: 0,
      handle: () => {
        this.activeTabIndex = 0;
        this.showFormPanelList = true;
        this.setMenuArrowIcon();
      },
    },
    {
      icon: 'heroQueueList',
      activeTabIndex: 1,
      handle: () => {
        this.activeTabIndex = 1;
        this.showFormPanelList = true;
        this.setMenuArrowIcon();
      },
    },
  ];
  showFormPanelList = true;
  activeTabIndex = 0;


  setMenuArrowIcon() {
    this.menu[0].icon = this.showFormPanelList
    ? 'heroChevronLeft'
    : 'heroChevronRight';
  }
}

interface Menu {
  icon: string;
  activeTabIndex: number | undefined;
  handle: () => void;
}
