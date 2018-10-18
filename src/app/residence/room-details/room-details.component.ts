import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  editProfile = true;
  editProfileIcon = 'icofont-edit';
  public data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public isCollapsed:boolean = true;

  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get(`assets/data/room-Student.json`)
    .subscribe((blockData) => {
      this.data = blockData.json();
    });
  }

  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }

}
