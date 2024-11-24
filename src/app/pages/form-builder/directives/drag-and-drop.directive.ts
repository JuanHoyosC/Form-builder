import {
  Directive,
  ElementRef,
  HostListener,
  model,
  OnChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropZone]',
  standalone: true,
})
export class DropZoneDirective implements OnChanges {
  childrenCount = model<number>(0)
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    this.updateDropZoneState();
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    if (this.isSameElementRef(event)) return;
    this.childrenCount.set(1)
    this.updateDropZoneState();
  }

  private updateDropZoneState(): void {
    if (this.childrenCount() === 0) {
      this.renderer.addClass(this.el.nativeElement, 'dropZone');
      this.renderer.addClass(this.el.nativeElement, 'relative');
      this.renderer.addClass(this.el.nativeElement, 'min-h-40');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'dropZone');
      this.renderer.addClass(this.el.nativeElement, 'relative');
      this.renderer.removeClass(this.el.nativeElement, 'min-h-40');
    }
  }

  private isSameElementRef(event: Event): boolean {
    if(this.childrenCount() > 0) return true;
    return event.target === this.el.nativeElement;
  }
}
