import { TestBed } from '@angular/core/testing';

import { ContactResolveResolver } from './contact-resolve.resolver';

describe('ContactResolveResolver', () => {
  let resolver: ContactResolveResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ContactResolveResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
