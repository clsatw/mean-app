import { TestBed, inject } from '@angular/core/testing';

import { AuthLoadGuardService } from './auth-load-guard.service';

describe('AuthLoadGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthLoadGuardService]
    });
  });

  it('should ...', inject([AuthLoadGuardService], (service: AuthLoadGuardService) => {
    expect(service).toBeTruthy();
  }));
});
