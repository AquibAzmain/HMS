import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed:boolean = true;
  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get(`assets/data/room.json`)
    .subscribe((data) => {
      this.data = data.json();
    });
  }

}
