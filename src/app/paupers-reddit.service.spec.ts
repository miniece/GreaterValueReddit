import { TestBed } from '@angular/core/testing';

import { PaupersRedditService } from './paupers-reddit.service';

describe('PaupersRedditService', () => {
  let service: PaupersRedditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaupersRedditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
