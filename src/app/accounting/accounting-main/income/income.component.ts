import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import { Http } from '@angular/http';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  public data: any;

  constructor(public http: Http) { }

  ngOnInit() {

    this.http.get(`assets/data/incomeType.json`)
    .subscribe((data) => {
      this.data = data.json();
    });
  }

}
