import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appDropZone]',
  standalone: true,
})
export class DropZoneDirective implements OnChanges {
  @Input() childrenCount = 0;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    console.log(this.childrenCount)
    this.updateDropZoneState();
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter() {
    this.updateActiveDropZoneState(true);
  }

  @HostListener('dragover', ['$event'])
  onDragOver() {
    this.updateActiveDropZoneState(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave() {
    this.updateActiveDropZoneState(false);
  }

  @HostListener('drop', ['$event'])
  onDrop() {
   this.childrenCount = 1;
   this.updateDropZoneState();
   this.updateActiveDropZoneState(false);
  }

  private updateDropZoneState(): void {
    if (this.childrenCount === 0) {
      this.renderer.addClass(this.el.nativeElement, 'dropZone');
      this.renderer.addClass(this.el.nativeElement, 'relative');
      this.renderer.addClass(this.el.nativeElement, 'min-h-40');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'dropZone');
      this.renderer.addClass(this.el.nativeElement, 'relative');
      this.renderer.removeClass(this.el.nativeElement, 'min-h-40');
    }
  }

  private updateActiveDropZoneState(isActive: boolean): void {
    if (isActive) {
      this.renderer.addClass(this.el.nativeElement, 'active');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'active');
    }
  }
}
