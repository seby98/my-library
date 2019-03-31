import { TestBed } from '@angular/core/testing';

import { RemoteBookService } from './remote-book.service';

describe('BookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoteBookService = TestBed.get(RemoteBookService);
    expect(service).toBeTruthy();
  });
});
