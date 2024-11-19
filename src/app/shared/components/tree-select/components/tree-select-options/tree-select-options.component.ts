import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { TreeNode } from 'primeng/api';
import { HERO_ICONS } from '../../../../icons';
import { TreeOptions } from '../../tree-select.component';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-tree-select-options',
  standalone: true,
  imports: [CommonModule, NgIconComponent, TooltipModule],
  providers: [provideIcons(HERO_ICONS)],
  templateUrl: './tree-select-options.component.html',
  styleUrl: './tree-select-options.component.scss'
})
export class TreeSelectOptionsComponent {
  @Input() treeOptions: TreeOptions[] = [];
  @Input() children: number = 0;
  @Input() optionSelected: TreeOptions | undefined = undefined;
  @Output() optionSelectedChange: EventEmitter<TreeOptions> = new EventEmitter();
  dropdownStates: {active: boolean}[] = [];

  ngOnChanges(): void {
    this.dropdownStates = this.treeOptions.map(() => ({active: true}));
  }


  toggleDropdown(event: MouseEvent, index: number) {
    event.preventDefault();
    event.stopPropagation();
    this.dropdownStates[index].active = !this.dropdownStates[index].active;
  }

  selectOption(optionSelected: TreeOptions) {
    this.optionSelected = optionSelected;
    this.optionSelectedChange.emit(optionSelected);
  }
}
