import { TestBed } from '@angular/core/testing';

import { ArtCartService } from './art-cart.service';

describe('ArtCartService', () => {
  let service: ArtCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
