import { TestBed } from '@angular/core/testing';

import { NmapService } from './nmap.service';

describe('NmapService', () => {
  let service: NmapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NmapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
