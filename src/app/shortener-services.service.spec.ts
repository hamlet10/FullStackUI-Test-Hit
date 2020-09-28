import { TestBed } from '@angular/core/testing';

import { ShortenerServicesService } from './shortener-services.service';

describe('ShortenerServicesService', () => {
  let service: ShortenerServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortenerServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
