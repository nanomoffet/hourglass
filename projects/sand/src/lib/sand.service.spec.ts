import { TestBed, inject } from '@angular/core/testing';

import { SandService } from './sand.service';

describe('SandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SandService]
    });
  });

  it('should be created', inject([SandService], (service: SandService) => {
    expect(service).toBeTruthy();
  }));
});
