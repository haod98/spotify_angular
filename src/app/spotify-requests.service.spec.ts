import { TestBed } from '@angular/core/testing';

import { SpotifyRequestsService } from './spotify-requests.service';

describe('SpotifyRequestsService', () => {
  let service: SpotifyRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
