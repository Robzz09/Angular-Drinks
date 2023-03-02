import { TestBed } from '@angular/core/testing';

import { MeterResolver } from './meter.resolver';

describe('MeterResolverResolver', () => {
  let resolver: MeterResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(MeterResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
