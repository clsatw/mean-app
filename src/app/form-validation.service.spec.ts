import { TestBed, inject } from '@angular/core/testing';

import { FormValidationService } from './form-validation.service';

describe('FormValidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormValidationService]
    });
  });

  it('should ...', inject([FormValidationService], (service: FormValidationService) => {
    expect(service).toBeTruthy();
  }));
});
