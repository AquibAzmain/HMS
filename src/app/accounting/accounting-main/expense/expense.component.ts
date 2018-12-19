import { Component, TemplateRef, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Transaction } from '../../../../models/Transaction';
import { Transaction_Category } from '../../../../models/Transaction_Category';
import { Transaction_SubCategory } from '../../../../models/Transaction_SubCategory';

import { TransactionService } from '../transaction.service';
import { TransactionCategoryService } from '../transaction-category.service';
import { TransactionSubcategoryService } from '../transaction-subcategory.service';
import { Router } from '@angular/router';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
import { Transaction_History } from '../../../../models/Transaction_History';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  position = 'bottom';
  bsValue = new Date();
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed:boolean = true;
  typeData: any;
  selectedMainType: any = '';
  allSubType: Array<any> = [];
  selectedSubType: any = '';
  selectedDate: any;
  modalHeader:string;
  myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
  };
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;

  role = localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer
  
  expenses: Transaction[] = [];
  expenseToBeAdded: Transaction = new Transaction();
  history: Transaction_History[] = [];
  
  category: Transaction_Category[] = [];
  subCategory: Transaction_SubCategory[] = [];
  hasError: boolean = false;
  singleCategory: Transaction_Category = new Transaction_Category;
  today: Date;
  constructor(public http: Http, private modalService: BsModalService,
    private transactionService : TransactionService, private transactionCategoryService : TransactionCategoryService,
    private transactionSubcategoryService : TransactionSubcategoryService, private router: Router,
    private toastyService: ToastyService ) { }

  ngOnInit() {
    this.today = new Date();
    this.hasError = false;
    if((this.role == "provost" || this.role == "accountant")) {
      this.getExpenseData();
      this.getCategoryData();
      //this.getSubCategoryData();
    }
    else {
      this.router.navigate(['/dashboard']);
    }
  }

  getExpenseData() {
    this.transactionService.getExpenseList()
      .subscribe((response) => { 
        this.expenses = response;
      }, error => {
        this.errorToast();
      });
  }

  getCategoryData() {
    this.singleCategory.parent_type = "expense";
    this.transactionCategoryService.getExpenseCategoryList()
      .subscribe((response) => { 
        this.category = response;
      });
  }

  getSubCategoryData(s: any) {
    
    this.transactionSubcategoryService.getSubCategoryList(s)
      .subscribe((response) => { 
        this.subCategory = response;
        //console.log(this.subCategory);
      });
  }


  public openAddExpenseModal(template: TemplateRef<any>) {
    this.expenseToBeAdded = new Transaction();
    this.modalRef = this.modalService.show(template);
  }
  
  confirmAddExpense(): void {
    console.log(this.expenseToBeAdded)
    //console.log(this.expenses.length);
    if (!this.expenseToBeAdded.purchase_date || !this.expenseToBeAdded.amount || !this.expenseToBeAdded.cat_name || !this.expenseToBeAdded.sub_name || !this.expenseToBeAdded.comment || !this.expenseToBeAdded.check) {
      this.hasError = true;
    }
    else {
      this.modalRef.hide();
      this.hasError = false;
      this.transactionService.addExpense(this.expenseToBeAdded)
      .subscribe((response) => { 
        this.successToast();
        this.getExpenseData();
      }, error => {
        this.errorToast();
      });
    }
    
  }

  public openUpdateExpenseModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirmUpdateExpense(expense): void {
    if (!expense.comment) {
      this.hasError = true;
    }

    else {
      this.modalRef.hide();
      this.hasError = false;
      this.transactionService.updateExpense(expense)
      .subscribe((response) => {
        this.successToast();
        this.getExpenseData();
        this.successToast();
      }, error => {
        this.errorToast();
      });
    }
  }

  public openDeleteModal(template: TemplateRef<any>) {
    this.deleteModalRef = this.modalService.show(template);
  }

  confirmDelete(expense): void {
    console.log(expense)
    this.deleteModalRef.hide();
    this.transactionService.deleteExpense(expense)
    .subscribe((response) => { 
      //this.successToast();
      let index = this.expenses.indexOf(expense);
      this.expenses.splice(index,1);
    }, error => {
      this.errorToast();
    });
  }

  public formatDate(date) {
    var day = date.getDate();
    var monthIndex = date.getMonth()+1;
    var year = date.getFullYear();
  
    return day + '/' + monthIndex + '/' + year;
  }

  selectMainType (event: any) {
    
    this.expenseToBeAdded.cat_name = event.target.value; 
    //console.log(event.target.value);
    
    this.getSubCategoryData(this.expenseToBeAdded.cat_name);
    //console.log(this.subCategory);
    this.expenseToBeAdded.sub_name = this.subCategory[0].sub_name;
  }

  selectSubType (event: any) {

    this.expenseToBeAdded.sub_name = event.target.value;
    console.log(event.target.value);
  }

  public openIncomeHistoryModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);
  }
  getExpenseHistoryData(tranid: number, template: TemplateRef<any>) {
    this.openIncomeHistoryModal(template);
    this.transactionService.getTransactionHistory(tranid)
      .subscribe((response) => {
        this.history = response;
        console.log(this.history);
      });
  }


  /* ********************************************* */
  
  


  onDateChanged(event: IMyDateModel) {
        this.selectedDate = event.date;
        console.log(this.selectedDate);
  }

  public openModal(template: TemplateRef<any>, type: string) {
    this.modalRef = this.modalService.show(template);
    if(type=="add")this.modalHeader = "নতুন ব্যয় যুক্ত করুন";
    else this.modalHeader = "হিসাব সংশোধন";
  }

  confirm(): void {
    console.log('Confirmed!');
    this.modalRef.hide();
  }
 
  decline(): void {
    console.log('Declined!');
    this.modalRef.hide();
    this.getExpenseData();
  }
 
  declineDelete(): void {
    this.deleteModalRef.hide();
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
