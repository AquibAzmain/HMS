import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import { Http } from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as jsPDF from 'jspdf';

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

  constructor(public http: Http, private modalService: BsModalService) { }

  

  ngOnInit() {
  }

  getData() {
    this.http.get(`assets/data/income.json`)
    .subscribe((selectedData) => {
      this.selectedData = selectedData.json();
    });

    
  }

  makePDF(){
    var doc = new jsPDF();

    //doc.text("Cost: 500 tk", 10, 10);

    doc.save('result.pdf');
  }


  getDateRange(){
    this.startDate = this.formatDate(this.dateRange[0]);
    this.endDate = this.formatDate(this.dateRange[1]);
    //console.log(this.startDate);
    //console.log(this.endDate);
    this.getData();
    this.makePDF();
    
  }

  formatDate(date) {

    var day = date.getDate();
    var monthIndex = date.getMonth()+1;
    var year = date.getFullYear();
  
    return day + '/' + monthIndex + '/' + year;
  }

}
