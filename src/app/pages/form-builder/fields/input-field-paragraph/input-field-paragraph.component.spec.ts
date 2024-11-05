import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldParagraphComponent } from './input-field-paragraph.component';

describe('InputFieldParagraphComponent', () => {
  let component: InputFieldParagraphComponent;
  let fixture: ComponentFixture<InputFieldParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputFieldParagraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFieldParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
