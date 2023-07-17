import { TestBed } from '@angular/core/testing';

import { SmartTableHttpService } from './smart-table-http.service';

describe('SmartTableHttpService', () => {
  let service: SmartTableHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartTableHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
