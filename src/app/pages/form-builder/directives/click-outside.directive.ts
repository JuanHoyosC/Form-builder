import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Output() outside = new EventEmitter<void>();
  @Input() ignoreElement: string[] = [];
  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedInIgnoredElement = this.ignoreElement.some((selector) =>
      (event.target as HTMLElement).closest(selector)
    );
    const clickedInside = this.el.nativeElement.contains(event.target);
    if (!clickedInside && !clickedInIgnoredElement) {
      this.outside.emit();
    }
  }
}
