import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenFormsViewComponent } from './model-driven-forms-view.component';

describe('ModelDrivenFormsViewComponent', () => {
  let component: ModelDrivenFormsViewComponent;
  let fixture: ComponentFixture<ModelDrivenFormsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelDrivenFormsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDrivenFormsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
