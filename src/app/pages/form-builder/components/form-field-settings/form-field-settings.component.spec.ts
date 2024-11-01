import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldSettingsComponent } from './form-field-settings.component';

describe('FormFieldSettingsComponent', () => {
  let component: FormFieldSettingsComponent;
  let fixture: ComponentFixture<FormFieldSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
