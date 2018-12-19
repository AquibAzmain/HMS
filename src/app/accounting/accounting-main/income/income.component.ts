import { Component, TemplateRef, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { Transaction } from '../../../../models/Transaction';
import { Transaction_History } from '../../../../models/Transaction_History';
import { Transaction_Category } from '../../../../models/Transaction_Category';
import { Transaction_SubCategory } from '../../../../models/Transaction_SubCategory';

import { TransactionService } from '../transaction.service';
import { TransactionCategoryService } from '../transaction-category.service';
import { TransactionSubcategoryService } from '../transaction-subcategory.service';
import { Router } from '@angular/router';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  position = 'bottom';

  bsValue = new Date();
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed: boolean = true;
  public typeData: any;
  selectedMainType: any = '';
  allSubType: Array<any> = [];
  selectedSubType: any = '';

  modalHeader: string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;

  role = localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer

  incomes: Transaction[] = [];
  incomeToBeAdded: Transaction = new Transaction();
  history: Transaction_History[] = [];


  category: Transaction_Category[] = [];
  subCategory: Transaction_SubCategory[] = [];
  tc: Transaction_Category = new Transaction_Category();
  singleCategory: Transaction_Category = new Transaction_Category;
  hasError: boolean = false;
  today: Date;

  constructor(public http: Http, private modalService: BsModalService,
    private transactionService: TransactionService, private transactionCategoryService: TransactionCategoryService,
    private transactionSubcategoryService: TransactionSubcategoryService, private router: Router,
    private toastyService: ToastyService) { }

  ngOnInit() {
    this.today = new Date();
    this.hasError = false;
    if ((this.role == "provost" || this.role == "accountant")) {
      this.getIncomeData();
      this.getCategoryData();
    }
    else {
      this.router.navigate(['/dashboard']);
    }
  }


  getIncomeData() {
    this.transactionService.getIncomeList()
      .subscribe((response) => {
        this.incomes = response;
        console.log(this.incomes);
      }, error => {
        this.errorToast();
      });
  }

  getCategoryData() {

    this.singleCategory.parent_type = "income";
    this.transactionCategoryService.getIncomeCategoryList()
      .subscribe((response) => {
        this.category = response;
        console.log(this.category);
      });
  }

  getSubCategoryData(s: any) {
    this.transactionSubcategoryService.getSubCategoryList(s)
      .subscribe((response) => {
        this.subCategory = response;
        //console.log(this.subCategory);
      });
  }

  public openAddIncomeModal(template: TemplateRef<any>) {
    this.incomeToBeAdded = new Transaction();
    this.modalRef = this.modalService.show(template);
  }

  confirmAddIncome(): void {
    if (!this.incomeToBeAdded.purchase_date || !this.incomeToBeAdded.amount || !this.incomeToBeAdded.comment || !this.incomeToBeAdded.cat_name || !this.incomeToBeAdded.sub_name || !this.incomeToBeAdded.check){
      this.hasError = true;
    }
    else {
      this.hasError = false;
      this.modalRef.hide();

    if (this.incomeToBeAdded.purchase_date != null) {
      this.incomeToBeAdded.purchase_date = this.formatDate(this.incomeToBeAdded.purchase_date);
    }
    this.transactionService.addIncome(this.incomeToBeAdded)
      .subscribe((response) => {
        //this.successToast();
        this.incomeToBeAdded = response;
        this.incomes.push(this.incomeToBeAdded);
        this.getIncomeData();
        this.successToast();
      }, error => {
        this.errorToast();
      });

    }
    
  }


  public formatDate(date) {
    var day = date.getDate();
    var monthIndex = date.getMonth() + 1;
    var year = date.getFullYear();

    return day + '/' + monthIndex + '/' + year;
  }


  public openUpdateIncomeModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);
  }

  confirmUpdateIncome(income: Transaction): void {
    
    console.log(income.comment);
    if (income.comment == null) {
      this.hasError = true;
    }

    else {
      this.modalRef.hide();
      this.hasError = false;
      this.transactionService.updateIncome(income)
      .subscribe((response) => {
        this.successToast();
        this.getIncomeData();
        console.log(response);
        console.log(income);
      }, error => {
        this.errorToast();
      });
    }

  }

  public openDeleteModal(template: TemplateRef<any>) {
    this.deleteModalRef = this.modalService.show(template);
  }

  confirmDelete(income): void {
    console.log(income)
    this.deleteModalRef.hide();
    this.transactionService.deleteIncome(income)
      .subscribe((response) => {
        this.successToast();
        let index = this.incomes.indexOf(income);
        this.incomes.splice(index, 1);
      }, error => {
        this.errorToast();
      });
  }



  selectMainType(event: any) {

    this.incomeToBeAdded.cat_name = event.target.value;
    //console.log(event.target.value);

    this.getSubCategoryData(this.incomeToBeAdded.cat_name);
    //console.log(this.subCategory);
    this.incomeToBeAdded.sub_name = this.subCategory[0].sub_name;
  }

  selectSubType(event: any) {

    this.incomeToBeAdded.sub_name = event.target.value;
    console.log(event.target.value);
  }

  public openIncomeHistoryModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);
  }


  getIncomeHistoryData(tranid: number, template: TemplateRef<any>) {
    this.openIncomeHistoryModal(template);
    this.transactionService.getTransactionHistory(tranid)
      .subscribe((response) => {
        this.history = response;
        console.log(this.history);
      });
  }
  // *************************************












  confirm(): void {
    console.log('Confirmed!');
    this.modalRef.hide();
  }

  decline(): void {
    console.log('Declined!');
    this.modalRef.hide();
    this.getIncomeData();
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
