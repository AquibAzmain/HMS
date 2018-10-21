import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-income-category',
  templateUrl: './income-category.component.html',
  styleUrls: ['./income-category.component.css']
})
export class IncomeCategoryComponent implements OnInit {

  public data: any;
  public incomeTypeData:any;
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

    this.http.get(`assets/data/incomeType.json`)
    .subscribe((typeData) => {
      this.incomeTypeData = typeData.json();
    });
  }

}
