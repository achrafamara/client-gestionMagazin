import { TestBed } from '@angular/core/testing';

import { MsProductService } from './ms-product.service';

describe('MsProductService', () => {
  let service: MsProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
