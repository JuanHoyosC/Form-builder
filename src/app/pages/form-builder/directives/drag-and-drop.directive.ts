import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { FieldGroup } from '../interfaces/form-builder';

@Directive({
  selector: '[appDropZone]',
  standalone: true,
})
export class DropZoneDirective implements OnChanges {

  @Input() fieldGroup: FieldGroup;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    console.log('sdfsdfsfds 2', this.el.nativeElement, this.fieldGroup)
  }

  ngOnChanges() {
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
   this.updateDropZoneState();
   this.updateActiveDropZoneState(false);
  }

  private updateDropZoneState(): void {
    const hasChildren = this.hasChildElements();
    if (!hasChildren) {
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

  private hasChildElements(): boolean {
    return this.el.nativeElement.children.length > 0;
  }

}
