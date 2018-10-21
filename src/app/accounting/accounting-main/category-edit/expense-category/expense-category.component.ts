import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-expense-category',
  templateUrl: './expense-category.component.html',
  styleUrls: ['./expense-category.component.css']
})
export class ExpenseCategoryComponent implements OnInit {

  public data: any;
  public expenseTypeData:any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed:boolean = true;

  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get(`assets/data/incomeCategory.json`)
    .subscribe((typeData) => {
      this.data = typeData.json();
    });

    this.http.get(`assets/data/expenseType.json`)
    .subscribe((typeData) => {
      this.expenseTypeData = typeData.json();
    });
  }

}
