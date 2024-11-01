import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
  standalone: true
})
export class ClickOutsideDirective {

  @Output() clickOutside = new EventEmitter<void>();
  ngOnInit() {}
  constructor(private el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedInside = this.el.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }

}
