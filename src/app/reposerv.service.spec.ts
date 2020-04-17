import { TestBed } from '@angular/core/testing';

import { ReposervService } from './reposerv.service';

describe('ReposervService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReposervService = TestBed.get(ReposervService);
    expect(service).toBeTruthy();
  });
});
