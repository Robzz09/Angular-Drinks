import { TestBed } from '@angular/core/testing';

import { DrinkResolver } from './drink.resolver';

describe('DrinkResolver', () => {
  let resolver: DrinkResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DrinkResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
