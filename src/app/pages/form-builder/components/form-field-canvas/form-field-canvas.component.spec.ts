import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldCanvasComponent } from './form-field-canvas.component';

describe('FormFieldCanvasComponent', () => {
  let component: FormFieldCanvasComponent;
  let fixture: ComponentFixture<FormFieldCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldCanvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
