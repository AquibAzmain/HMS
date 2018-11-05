import { TestBed, inject } from '@angular/core/testing';

import { TransactionSubcategoryService } from './transaction-subcategory.service';

describe('TransactionSubcategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionSubcategoryService]
    });
  });

  it('should be created', inject([TransactionSubcategoryService], (service: TransactionSubcategoryService) => {
    expect(service).toBeTruthy();
  }));
});
