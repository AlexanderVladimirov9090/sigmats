import { TestBed } from '@angular/core/testing';

import { SigmatsLibService } from './sigmats-lib.service';

describe('SigmatsLibService', () => {
  let service: SigmatsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigmatsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
