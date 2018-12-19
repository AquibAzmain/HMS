import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Transaction_Category } from '../../../../../models/Transaction_Category';
import { Transaction_SubCategory } from '../../../../../models/Transaction_SubCategory';

import { TransactionCategoryService } from '../../transaction-category.service';
import { TransactionSubcategoryService } from '../../transaction-subcategory.service';
import { Router } from '@angular/router';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
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

  role = localStorage.getItem('role');//localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer

  category: Transaction_Category[] = [];
  subCategory: Transaction_SubCategory[] = [];
  subCategoryToBeAdded: Transaction_SubCategory = new Transaction_SubCategory;
  singleCategory: Transaction_Category = new Transaction_Category;
  hasError: boolean;
  position: any;
  cat1: any;
  cat2: any;

  constructor(public http: Http, private modalService: BsModalService,
    private transactionCategoryService : TransactionCategoryService,
    private transactionSubcategoryService : TransactionSubcategoryService, private router: Router,
    private toastyService: ToastyService ) { }

  ngOnInit() {
    this.hasError = false;
    if((this.role == "provost" || this.role == "accountant")) {
      this.getExpenseCategoryData();
      this.getCatSubData();
    }
    else {
      this.router.navigate(['/dashboard']);
    }
  }
  
  getCatSubData(){
    this.transactionSubcategoryService.getExpenseSubCat()
      .subscribe((response) => {
        this.cat1 = response[0];
        this.cat2 = response[1];
      });
  }


  getExpenseCategoryData() {
    console.log(this.category);

    this.singleCategory.parent_type = "expense";
    this.transactionCategoryService.getExpenseCategoryList()
      .subscribe((response) => { 
        this.category = response;
      });
  }

  /*
  getSubCategoryData() {
    console.log(this.subCategory);
    this.transactionSubcategoryService.getSubCategoryList()
      .subscribe((response) => { 
        this.subCategory = response;
      });
  }
  */
  getCategoryId (event: any) {
    
    console.log(event.target.value);

    this.subCategoryToBeAdded.parent_cat = event.target.value; 
  }

  confirmAddSubCategory(){

    if (this.subCategoryToBeAdded.sub_name == null || this.subCategoryToBeAdded.parent_cat == null) {
      this.hasError = true;
      console.log('lalala')
    }
    else {
      this.hasError = false;
      this.transactionSubcategoryService.addSubCategory(this.subCategoryToBeAdded)
      .subscribe((response) => { 
        this.getCatSubData();
        this.successToast();
      }, error => {
        this.errorToast();
      });
    }  
  }

  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        /* added */
      },
      onRemove: (toast: ToastData) => {
        /* removed */
      }
    };

    switch (options.type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }
  }

  successToast() {
    this.addToast({
      title: 'Success',
      msg: 'Operation successful.',
      timeout: 5000, theme: 'material',
      position: 'bottom',
      type: 'success'
    });
  }

  errorToast() {
    this.addToast({
      title: 'Error',
      msg: 'Operation not successful. Check your net connection',
      timeout: 5000, theme: 'material',
      position: 'bottom',
      type: 'error'
    });
  }

}
