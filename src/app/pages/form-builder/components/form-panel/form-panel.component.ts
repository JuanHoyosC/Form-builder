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
  heroSquares2x2,
  heroChevronLeft,
  heroChevronRight,
  heroRectangleGroup,
  heroQueueList,
} from '@ng-icons/heroicons/outline';
import { FormPanelSectionListComponent } from '../form-panel-section-list/form-panel-section-list.component';
import { FormPanelHeaderComponent } from '../form-panel-header/form-panel-header.component';
import { FormFieldList } from '../../interfaces/form-builder';
import { TabViewModule } from 'primeng/tabview';
import { TreeModule } from 'primeng/tree';
import { FormsModule } from '@angular/forms';
import { TreeDragDropService, TreeNode } from 'primeng/api';
import { FormBuilderTypesService } from '../../services/form-builder-types.service';

@Component({
  selector: 'app-form-panel',
  standalone: true,
  imports: [
    CommonModule,
    NgIconComponent,
    TabViewModule,
    TreeModule,
    FormsModule,
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
      heroEllipsisHorizontal,
      heroSquares2x2,
      heroHashtag,
      heroH1,
      heroChevronLeft,
      heroChevronRight,
      heroRectangleGroup,
      heroQueueList,
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
  showFormPanelList: boolean = true;
  activeTabIndex: number = 0;


  setMenuArrowIcon() {
    this.menu[0].icon = this.showFormPanelList
    ? 'heroChevronLeft'
    : 'heroChevronRight';
  }
}

type Menu = {
  icon: string;
  activeTabIndex: number | undefined;
  handle: () => void;
};
