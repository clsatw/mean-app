import { TestBed, inject } from '@angular/core/testing';

import { FormValidateService } from './form-validate.service';

describe('FormValidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormValidateService]
    });
  });

  it('should ...', inject([FormValidateService], (service: FormValidateService) => {
    expect(service).toBeTruthy();
  }));
});
