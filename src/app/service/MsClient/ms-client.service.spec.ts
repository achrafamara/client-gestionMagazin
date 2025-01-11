import { TestBed } from '@angular/core/testing';

import { MsClientService } from './ms-client.service';

describe('MsClientService', () => {
  let service: MsClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
