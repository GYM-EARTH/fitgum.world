import { TestBed } from '@angular/core/testing';

import { FlyersService } from './flyers.service';

describe('FlyersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlyersService = TestBed.get(FlyersService);
    expect(service).toBeTruthy();
  });
});
