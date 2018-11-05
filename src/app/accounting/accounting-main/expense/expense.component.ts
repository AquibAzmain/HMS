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

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
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

  role = "hallOfficer"//localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer
  
  expenses: Transaction[] = [];
  epenseToBeAdded: Transaction = new Transaction();

  category: Transaction_Category[] = [];
  subCategory: Transaction_SubCategory[] = [];

  constructor(public http: Http, private modalService: BsModalService,
    private transactionService : TransactionService, private transactionCategoryService : TransactionCategoryService,
    private transactionSubcategoryService : TransactionSubcategoryService, private router: Router ) { }

  ngOnInit() {
    
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer"|| this.role =="admin")) {
      this.getExpenseData();
      this.getCategoryData();
      this.getSubCategoryData();
    }
    else {
      this.router.navigate(['/**']);
    }
  }

  getExpenseData() {
    this.transactionService.getExpenseList()
      .subscribe((response) => { 
        this.expenses = response;
        console.log(this.expenses);
      });
  }

  getCategoryData() {
    this.transactionCategoryService.getCategoryList()
      .subscribe((response) => { 
        this.category = response;
        console.log(this.category);
      });
  }

  getSubCategoryData() {
    this.transactionSubcategoryService.getSubCategoryList()
      .subscribe((response) => { 
        this.subCategory = response;
        console.log(this.subCategory);
      });
  }


  public openAddExpenseModal(template: TemplateRef<any>) {
    this.epenseToBeAdded = new Transaction();
    this.modalRef = this.modalService.show(template);
  }
  
  confirmAddExpense(): void {
    console.log(this.expenses.length);
    this.modalRef.hide();
    if(this.epenseToBeAdded.purchase_date != null){
      this.epenseToBeAdded.purchase_date = this.formatDate(this.epenseToBeAdded.purchase_date);
    }
    this.transactionService.addExpense(this.epenseToBeAdded)
    .subscribe((response) => { 
      ////////////////////alert//////////////////////////
      this.epenseToBeAdded = response;
      this.expenses.push(this.epenseToBeAdded);
      this.getExpenseData();
    });
  }

  public openUpdateExpenseModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirmUpdateExpense(expense): void {
    console.log(expense);
    this.modalRef.hide();
    if(expense.purchase_date != null){
      expense.purchase_date = this.formatDate(expense.purchase_date);
    }
    
    this.transactionService.updateExpense(expense)
    .subscribe((response) => { 
      this.getExpenseData();
      console.log(response);
      console.log(expense);
    });
  }

  public openDeleteModal(template: TemplateRef<any>) {
    this.deleteModalRef = this.modalService.show(template);
  }

  confirmDelete(expense): void {
    console.log(expense)
    this.deleteModalRef.hide();
    this.transactionService.deleteExpense(expense)
    .subscribe((response) => { 
      let index = this.expenses.indexOf(expense);
      this.expenses.splice(index,1);
    });
  }

  public formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth()+1;
    var year = date.getFullYear();
  
    return day + '/' + monthIndex + '/' + year;
  }





  /* ********************************************* */
  selectMainType (event: any) {
    
    this.selectedMainType = event.target.value; 
    this.getSubTypes();
  }


  getSubTypes() {
    
    this.typeData.forEach(element => {
      
      if( element.typeMain === this.selectedMainType ) {
        this.allSubType = element.subType;
        console.log(this.allSubType);
      }
      
    });
  }


  selectSubType (event: any) {

    this.selectedSubType = event.target.value;
    console.log(this.selectedSubType);
  }


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
  }
 
  declineDelete(): void {
    this.deleteModalRef.hide();
  }

}
