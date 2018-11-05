import { Component, TemplateRef, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Transaction } from '../../../../models/Transaction';
import { Transaction_Category } from '../../../../models/Transaction_Category';
import { Transaction_SubCategory } from '../../../../models/Transaction_SubCategory';

import { TransactionService } from '../transaction.service';
import { TransactionCategoryService } from '../transaction-category.service';
import { TransactionSubcategoryService } from '../transaction-subcategory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  
  bsValue = new Date();
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed:boolean = true;
  public typeData: any;
  selectedMainType: any = '';
  allSubType: Array<any> = [];
  selectedSubType: any = '';
  
  modalHeader:string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;

  role = "hallOfficer"//localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer
  
  incomes: Transaction[] = [];
  incomeToBeAdded: Transaction = new Transaction();

  category: Transaction_Category[] = [];
  subCategory: Transaction_SubCategory[] = [];

  constructor(public http: Http, private modalService: BsModalService,
    private transactionService : TransactionService, private transactionCategoryService : TransactionCategoryService,
    private transactionSubcategoryService : TransactionSubcategoryService, private router: Router ) { }

  ngOnInit() {
    
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer"|| this.role =="admin")) {
      this.getIncomeData();
      this.getCategoryData();
      this.getSubCategoryData();
    }
    else {
      this.router.navigate(['/**']);
    }
  }


  getIncomeData() {
    this.transactionService.getIncomeList()
      .subscribe((response) => { 
        this.incomes = response;
        console.log(this.incomes);
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

  public openAddIncomeModal(template: TemplateRef<any>) {
    this.incomeToBeAdded = new Transaction();
    this.modalRef = this.modalService.show(template);
  }
  
  confirmAddIncome(): void {
    console.log(this.incomes.length);
    this.modalRef.hide();

    if(this.incomeToBeAdded.purchase_date != null){
      this.incomeToBeAdded.purchase_date = this.formatDate(this.incomeToBeAdded.purchase_date);
    }
    this.transactionService.addIncome(this.incomeToBeAdded)
    .subscribe((response) => { 

      this.incomeToBeAdded = response;
      this.incomes.push(this.incomeToBeAdded);
      this.getIncomeData();
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


  public openUpdateIncomeModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirmUpdateIncome(income): void {
    console.log(income);
    this.modalRef.hide();
    if(income.purchase_date != null){
      income.purchase_date = this.formatDate(income.purchase_date);
    }
    
    this.transactionService.updateIncome(income)
    .subscribe((response) => { 
      this.getIncomeData();
      console.log(response);
      console.log(income);
    });
  }

  public openDeleteModal(template: TemplateRef<any>) {
    this.deleteModalRef = this.modalService.show(template);
  }

  confirmDelete(income): void {
    console.log(income)
    this.deleteModalRef.hide();
    this.transactionService.deleteIncome(income)
    .subscribe((response) => { 
      let index = this.incomes.indexOf(income);
      this.incomes.splice(index,1);
    });
  }

   // *************************************

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


  public openModal(template: TemplateRef<any>, type: string) {
    this.modalRef = this.modalService.show(template);
    if(type=="add")this.modalHeader = "নতুন আয়ের হিসাব যুক্ত করুন";
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
