import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get(`assets/data/data.json`)
    .subscribe((data) => {
      this.data = data.json();
    });
  }

}
