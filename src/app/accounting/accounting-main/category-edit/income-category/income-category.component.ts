import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Transaction_Category } from '../../../../../models/Transaction_Category';
import { Transaction_SubCategory } from '../../../../../models/Transaction_SubCategory';

import { TransactionCategoryService } from '../../transaction-category.service';
import { TransactionSubcategoryService } from '../../transaction-subcategory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income-category',
  templateUrl: './income-category.component.html',
  styleUrls: ['./income-category.component.css']
})
export class IncomeCategoryComponent implements OnInit {

  public data: any;
  public incomeTypeData:any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed:boolean = true;

  role = localStorage.getItem('role');//localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer

  category: Transaction_Category[] = [];
  subCategory: Transaction_SubCategory[] = [];
  subCategoryToBeAdded: Transaction_SubCategory = new Transaction_SubCategory;
  singleCategory: Transaction_Category = new Transaction_Category;

  constructor(public http: Http, private modalService: BsModalService,
    private transactionCategoryService : TransactionCategoryService,
    private transactionSubcategoryService : TransactionSubcategoryService, private router: Router ) { }

  ngOnInit() {
    
    
    if((this.role == "provost" || this.role == "accountant")) {
    }
    else {
      this.router.navigate(['/dashboard']);
    }

  }


  getIncomeCategoryData() {
    console.log(this.category);

    this.singleCategory.parent_type = "income";
    this.transactionCategoryService.getIncomeCategoryList()
      .subscribe((response) => { 
        this.category = response;
      });
  }


  getSubCategoryData(s: any) {
    console.log(this.subCategory);
    this.transactionSubcategoryService.getSubCategoryList(s)
      .subscribe((response) => { 
        this.subCategory = response;
      });
  }

  getCategoryId (event: any) {
    
    console.log(event.target.value);

    this.subCategoryToBeAdded.parent_cat = event.target.value; 
  }

  confirmAddSubCategory(){

    console.log(this.subCategoryToBeAdded);

    this.transactionSubcategoryService.addSubCategory(this.subCategoryToBeAdded)
    .subscribe((response) => { 

      this.subCategoryToBeAdded = response;
    });
  }

}
