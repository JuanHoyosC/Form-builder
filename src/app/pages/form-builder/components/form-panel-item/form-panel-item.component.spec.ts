import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPanelItemComponent } from './form-panel-item.component';

describe('FormPanelItemComponent', () => {
  let component: FormPanelItemComponent;
  let fixture: ComponentFixture<FormPanelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPanelItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
