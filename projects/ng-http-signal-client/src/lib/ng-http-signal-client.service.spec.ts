import { TestBed } from '@angular/core/testing';

import { NgHttpSignalClientService } from './ng-http-signal-client.service';

describe('NgHttpSignalClientService', () => {
  let service: NgHttpSignalClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgHttpSignalClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
