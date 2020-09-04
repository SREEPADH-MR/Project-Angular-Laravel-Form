import { TestBed } from '@angular/core/testing';

import { TemplateDrivenFormsService } from './template-driven-forms.service';

describe('TemplateDrivenFormsService', () => {
  let service: TemplateDrivenFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateDrivenFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
