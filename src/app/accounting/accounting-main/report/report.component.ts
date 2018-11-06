import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import { Http } from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {Report} from '../../../../models/Report';
import { Transaction } from '../../../../models/Transaction';
import { Router } from '@angular/router';
import { TransactionService } from '../transaction.service';
import { Balance } from '../../../../models/Balance';
declare var jsPDF: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  bsValue = new Date();
  dateRange:any;
  startDate:any;
  endDate:any;
  selectedData: Array<any> = [];
  report : Report = new Report();
  transactions: Transaction[] = [];
  currentBalance: Balance = new Balance();

  modalHeader:string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;


  totalIncome: number;
  totalExpense: number;
  netValue: number;

  role = "hallOfficer"//localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer

  constructor(public http: Http, private modalService: BsModalService,
    private transactionService : TransactionService, private router: Router) { }

  

  ngOnInit() {
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer"|| this.role =="admin")) {
      this.getBalance();
    }
    else {
      this.router.navigate(['/**']);
    }
  }

  getBalance() {
    this.transactionService.getBalance()
      .subscribe((response) => { 
        
        
        this.currentBalance = response;
        console.log(this.currentBalance);
        
      }, error => {
       
      });
  }

  getData() {
    this.report.start_date = this.formatDate(this.dateRange[0]);
    this.report.end_date = this.formatDate(this.dateRange[1]);
    console.log(this.report.start_date);
    console.log(this.report.end_date);
    
    this.transactionService.generateReport(this.report)
      .subscribe((response) => { 
        
        
        this.transactions = response;
        console.log(this.transactions);
        this.convertToPdf();
        
      }, error => {
       
      });

      
  }

  convertToPdf(){
    //console.log("lalallllalallal");
    var doc = new jsPDF();
    var col = ["Category", "Type","Sub Category", "Amount", "Date"];
    var rows = [];
    console.log(this.transactions);
    this.calculateSummary();

    doc.autoTable( ["Total Income", "Total Expense", "Net Balance"], [ [this.totalIncome, this.totalExpense, this.netValue] ]);

    doc.addPage();

    var counter = 0;

    for(var key in this.transactions){
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

      if( counter%30 == 0) {
        doc.autoTable(col, rows);
        doc.addPage();
        rows = [];
      }
      
    }

    if(counter%30 != 0) doc.autoTable(col, rows);
    doc.save('transactions.pdf');

    
  }


  calculateSummary() {

    this.totalIncome = 0;
    this.totalExpense = 0;
    this.netValue = 0;

    for(var key in this.transactions){
      //console.log(key);
      var type = this.transactions[key]['trantype'];
      var amount = this.transactions[key]['amount'];

      if( type.localeCompare("income") == 0 ) this.totalIncome += amount;
      else this.totalExpense += amount;
    }

    this.netValue = this.totalIncome - this.totalExpense;

    console.log(this.netValue);
  }

  formatDate(date) {

    var day = date.getDate();
    var monthIndex = date.getMonth()+1;
    var year = date.getFullYear();
  
    return day + '/' + monthIndex + '/' + year;
  }

}
