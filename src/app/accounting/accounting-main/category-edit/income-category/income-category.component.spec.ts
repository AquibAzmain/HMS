import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeCategoryComponent } from './income-category.component';

describe('IncomeCategoryComponent', () => {
  let component: IncomeCategoryComponent;
  let fixture: ComponentFixture<IncomeCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
