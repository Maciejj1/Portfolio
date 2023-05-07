import { TestBed } from '@angular/core/testing';

import { LoadingScreenService } from './loadingscreenservice.service';

describe('LoadingscreenserviceService', () => {
  let service: LoadingScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
