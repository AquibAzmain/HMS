import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Http } from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Report } from '../../../../models/Report';
import { Transaction } from '../../../../models/Transaction';
import { Router } from '@angular/router';
import { TransactionService } from '../transaction.service';
import { Balance } from '../../../../models/Balance';
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';
declare var jsPDF: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  bsValue = new Date();
  dateRange: any;
  startDate: any;
  endDate: any;
  selectedData: Array<any> = [];
  report: Report = new Report();
  transactions: Transaction[] = [];
  currentBalance: Balance = new Balance();

  modalHeader: string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;


  totalIncome: number;
  totalExpense: number;
  netValue: number;

  role = localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer
  position: any;
  isLoad: boolean;
  hasError: boolean = false;

  constructor(public http: Http, private modalService: BsModalService,
    private transactionService: TransactionService, private router: Router,
    private toastyService: ToastyService) { }



  ngOnInit() {
    this.isLoad = false;
    if ((this.role == "provost" || this.role == "accountant")) {
      //this.getBalance();
      this.getPresentBalance();
    }
    else {
      this.router.navigate(['/dashboard']);
    }
  }

  /*
  getBalance() {
    this.transactionService.getBalance()
      .subscribe((response) => { 
        this.calculateSummary();
        
        this.currentBalance = response;
        console.log(this.currentBalance);
        
      }, error => {
       
      });
  }
  */

  // getPresentBalance() {

  //   this.netValue = 0;
  //   this.transactionService.getIncomeList()
  //     .subscribe((response) => {  
  //       this.transactions = response;
  //       console.log(this.transactions);
  //       for(var key in this.transactions){
  //         this.netValue += this.transactions[key].amount;
  //       }
  //     }, error => {

  //     });



  //     this.transactionService.getExpenseList()
  //     .subscribe((response) => {  
  //       this.transactions = response;
  //       console.log(this.transactions);
  //       for(var key in this.transactions){
  //         this.netValue -= this.transactions[key].amount;
  //       }
  //       console.log("Net: "+ this.netValue);
  //     }, error => {

  //     });

  // }
  getPresentBalance() {
    this.netValue = 0;
    let incomeData: any;
    let expenseData: any;
    this.transactionService.getIncomeExpense()
      .subscribe((response) => {
        incomeData = response[0];
        expenseData = response[1];
        for (var key in incomeData) {
          this.netValue += incomeData[key].amount;
        }
        for (var key in expenseData) {
          this.netValue -= expenseData[key].amount;
        }
        this.isLoad = true;
      }, error => {

      });
  }

  getData() {
    
    if (!this.dateRange) {
      this.hasError = true;
    }
    else {
      this.report.start_date = this.formatDate(this.dateRange[0]);
      this.report.end_date = this.formatDate(this.dateRange[1]);
      this.hasError = false;
      this.transactionService.generateReport(this.report)
      .subscribe((response) => {
        this.transactions = response;
        this.convertToPdf();
      }, error => {
        this.errorToast();
      });
    }
    


  }

  convertToPdf() {
    
      var doc = new jsPDF();
      var col = ["Category", "Type", "Sub Category", "Amount", "Date"];
      var rows = [];
      this.calculateSummary();

      doc.autoTable(["Start", "End", "Total Income", "Total Expense", "Net Balance"], [[this.report.start_date, this.report.end_date, this.totalIncome, this.totalExpense, this.netValue]]);
      doc.addPage();

      var counter = 0;

      for (var key in this.transactions) {
        //console.log(key);
        var temp = [
          this.transactions[key]['cat_name'],
          this.transactions[key]['trantype'],
          this.transactions[key]['sub_name'],
          this.transactions[key]['amount'],
          this.transactions[key]['purchase_date']
        ];

        counter++;
        rows.push(temp);

        if (counter % 30 == 0) {
          doc.autoTable(col, rows);
          doc.addPage();
          rows = [];
        }

      }

      if (counter % 30 != 0) doc.autoTable(col, rows);
      doc.save('transactions.pdf');
    



  }


  calculateSummary() {

    this.totalIncome = 0;
    this.totalExpense = 0;
    this.netValue = 0;

    for (var key in this.transactions) {
      //console.log(key);
      var type = this.transactions[key]['trantype'];
      var amount = this.transactions[key]['amount'];

      if (type.localeCompare("income") == 0) this.totalIncome += amount;
      else this.totalExpense += amount;
    }

    this.netValue = this.totalIncome - this.totalExpense;

    console.log(this.netValue);
  }

  formatDate(date) {

    var day = date.getDate();
    var monthIndex = date.getMonth() + 1;
    var year = date.getFullYear();

    return day + '/' + monthIndex + '/' + year;
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
