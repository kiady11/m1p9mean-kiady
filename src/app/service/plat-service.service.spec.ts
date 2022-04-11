import { TestBed } from '@angular/core/testing';

import { PlatServiceService } from './plat-service.service';

describe('PlatServiceService', () => {
  let service: PlatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
