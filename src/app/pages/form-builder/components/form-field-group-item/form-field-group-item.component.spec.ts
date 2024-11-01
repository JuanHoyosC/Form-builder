import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldGroupItemComponent } from './form-field-group-item.component';

describe('FormFieldGroupItemComponent', () => {
  let component: FormFieldGroupItemComponent;
  let fixture: ComponentFixture<FormFieldGroupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldGroupItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
