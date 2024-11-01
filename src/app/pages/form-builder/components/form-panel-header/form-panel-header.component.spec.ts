import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPanelHeaderComponent } from './form-panel-header.component';

describe('FormPanelHeaderComponent', () => {
  let component: FormPanelHeaderComponent;
  let fixture: ComponentFixture<FormPanelHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPanelHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
