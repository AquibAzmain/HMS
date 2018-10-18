import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.css']
})
export class BlockListComponent implements OnInit {

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed:boolean = true;
  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get(`assets/data/block.json`)
    .subscribe((blockData) => {
      this.data = blockData.json();
    });
  }

}
