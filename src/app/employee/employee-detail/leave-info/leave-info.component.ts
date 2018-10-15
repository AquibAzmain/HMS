import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-leave-info',
  templateUrl: './leave-info.component.html',
  styleUrls: ['./leave-info.component.css']
})
export class LeaveInfoComponent implements OnInit {
  public data: any;
  public rowsOnPage = 5;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed:boolean = true;

  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get(`assets/data/employee-leave.json`)
    .subscribe((data) => {
      this.data = data.json();
    });
  }

}
