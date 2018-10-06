import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-residence-info',
  templateUrl: './residence-info.component.html',
  styleUrls: ['./residence-info.component.css']
})
export class ResidenceInfoComponent implements OnInit {
  editProfile = true;
  editProfileIcon = 'icofont-edit';


  ngOnInit() {
  }

  toggleEditProfile() {
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editProfile = !this.editProfile;
  }

}