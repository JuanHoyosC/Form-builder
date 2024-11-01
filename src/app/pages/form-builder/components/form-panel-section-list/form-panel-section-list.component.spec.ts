import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPanelSectionListComponent } from './form-panel-section-list.component';

describe('FormPanelSectionListComponent', () => {
  let component: FormPanelSectionListComponent;
  let fixture: ComponentFixture<FormPanelSectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPanelSectionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPanelSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
