
import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-icon',
  standalone: true,
  template: `<div

  >
    <img
      src="./assets/icons/drag.svg"
      alt="drag"
      class="object-contain w-4 h-4 pointer-events-none select-none"
    />
  </div> `,
})
export class DragIconComponent {}
