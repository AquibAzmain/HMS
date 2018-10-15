import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  editProfile = true;
  editProfileIcon = 'icofont-edit';

  constructor() { }

  ngOnInit() {
  }

  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }
}
