import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import { Http } from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as jsPDF from 'jspdf';
import {Report} from '../../../../models/Report';
import { Transaction } from '../../../../models/Transaction';
import { Router } from '@angular/router';
import { TransactionService } from '../transaction.service';

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


  modalHeader:string;
  public modalRef: BsModalRef;
  public deleteModalRef: BsModalRef;

  role = "hallOfficer"//localStorage.getItem('role');  //"hallOfficer"; //admin hallOfficer

  constructor(public http: Http, private modalService: BsModalService,
    private transactionService : TransactionService, private router: Router) { }

  

  ngOnInit() {
    if((this.role == "provost" || this.role == "houseTutor" || this.role == "hallOfficer"|| this.role =="admin")) {

    }
    else {
      this.router.navigate(['/**']);
    }
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
        
      }, error => {
       
      });

    
  }

  makePDF(){
    var doc = new jsPDF();

    //doc.text("Cost: 500 tk", 10, 10);

    doc.save('result.pdf');
  }


  getDateRange(){
    


    this.getData();
    //this.makePDF();
    
  }

  formatDate(date) {

    var day = date.getDate();
    var monthIndex = date.getMonth()+1;
    var year = date.getFullYear();
  
    return day + '/' + monthIndex + '/' + year;
  }

}
