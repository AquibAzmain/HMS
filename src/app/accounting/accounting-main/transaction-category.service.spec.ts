import { TestBed, inject } from '@angular/core/testing';

import { TransactionCategoryService } from './transaction-category.service';

describe('TransactionCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionCategoryService]
    });
  });

  it('should be created', inject([TransactionCategoryService], (service: TransactionCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
