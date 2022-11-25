import { TestBed } from '@angular/core/testing';

import { ProductoPlanService } from './producto-plan.service';

describe('ProductoPlanService', () => {
  let service: ProductoPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
