import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  bsValue = new Date();
  constructor() { }

  dateRange:any;
  startDate:any;
  endDate:any;

  ngOnInit() {
  }

  generateReport(){
    this.startDate = this.formatDate(this.dateRange[0]);
    this.endDate = this.formatDate(this.dateRange[1]);
    console.log(this.startDate);
    console.log(this.endDate);
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

}
