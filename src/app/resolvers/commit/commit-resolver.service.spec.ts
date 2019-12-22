import { TestBed } from '@angular/core/testing';

import { CommitResolver } from './commit-resolver';

describe('CommitResolver', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommitResolver = TestBed.get(CommitResolver);
    expect(service).toBeTruthy();
  });
});
