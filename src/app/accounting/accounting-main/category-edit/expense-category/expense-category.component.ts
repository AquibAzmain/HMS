import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Transaction_Category } from '../../../../../models/Transaction_Category';
import { Transaction_SubCategory } from '../../../../../models/Transaction_SubCategory';

import { TransactionCategoryService } from '../../transaction-category.service';
import { TransactionSubcategoryService } from '../../transaction-subcategory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-category',
  templateUrl: './expense-category.component.html',
  styleUrls: ['./expense-category.component.css']
})
export class ExpenseCategoryComponent implements OnInit {

  public data: any;
  public expenseTypeData:any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed:boolean = true;

  role = "hallOfficer"//localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer

  category: Transaction_Category[] = [];
  subCategory: Transaction_SubCategory[] = [];
  subCategoryToBeAdded: Transaction_SubCategory = new Transaction_SubCategory;

  constructor(public http: Http, private modalService: BsModalService,
    private transactionCategoryService : TransactionCategoryService,
    private transactionSubcategoryService : TransactionSubcategoryService, private router: Router ) { }

  ngOnInit() {
    
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer"|| this.role =="admin")) {
      this.getCategoryData();
      this.getSubCategoryData();
      //this.subCategoryToBeAdded.parent_cat = "University expense";

    }
    else {
      this.router.navigate(['/**']);
    }
    
    // this.http.get(`assets/data/incomeCategory.json`)
    // .subscribe((typeData) => {
    //   this.data = typeData.json();
    // });

    // this.http.get(`assets/data/expenseType.json`)
    // .subscribe((typeData) => {
    //   this.expenseTypeData = typeData.json();
    // });
  }


  getCategoryData() {
    // console.log(this.category);
    // this.transactionCategoryService.getCategoryList()
    //   .subscribe((response) => { 
    //     this.category = response;
    //   });
  }

  getSubCategoryData() {
    console.log(this.subCategory);
    this.transactionSubcategoryService.getSubCategoryList()
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
