import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountingMainComponent } from './accounting-main.component';

describe('AccountingMainComponent', () => {
  let component: AccountingMainComponent;
  let fixture: ComponentFixture<AccountingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountingMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
