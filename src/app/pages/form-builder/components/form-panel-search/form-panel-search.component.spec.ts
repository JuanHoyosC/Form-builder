import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPanelSearchComponent } from './form-panel-search.component';

describe('FormPanelSearchComponent', () => {
  let component: FormPanelSearchComponent;
  let fixture: ComponentFixture<FormPanelSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPanelSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPanelSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
