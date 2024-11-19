import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { HERO_ICONS } from '../../icons';
import { TreeSelectOptionsComponent } from './components/tree-select-options/tree-select-options.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-tree-select',
  standalone: true,
  imports: [CommonModule, NgIconComponent, OverlayPanelModule, TooltipModule, TreeSelectOptionsComponent],
  providers: [provideIcons(HERO_ICONS)],
  templateUrl: './tree-select.component.html',
})
export class TreeSelectComponent {
  @Input() treeOptions: TreeOptions[] = [];
  @Input() optionSelected: TreeOptions | undefined = undefined;
  @Output() optionSelectedChanged = new EventEmitter();
  showOptions: boolean = false;
}


export type TreeOptions = {
  key: string,
  label: string,
  data: any,
  selectable: boolean,
  expanded: true,
  icon: string,
  children?: TreeOptions[]
}
